/**
 * ARGON Feedback Portal JavaScript
 * Enhanced with security measures for GitHub Pages hosting
 */

document.addEventListener('DOMContentLoaded', function() {
    // Apply dark theme
    document.body.classList.add('dark-theme');
    
    // Tab navigation
    const feedbackTabs = document.querySelectorAll('.feedback-tab');
    const feedbackSections = document.querySelectorAll('.feedback-section');
    
    feedbackTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and sections
            feedbackTabs.forEach(t => t.classList.remove('active'));
            feedbackSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding section
            const tabName = tab.getAttribute('data-tab');
            const activeSection = document.getElementById(tabName);
            if (activeSection) {
                activeSection.classList.add('active');
            }
        });
    });
    
    // Form submission handling for all forms - Updated with security measures
    const forms = document.querySelectorAll('.feedback-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Verify reCAPTCHA is checked - modified to work with explicit rendering
            const formId = this.id;
            let recaptchaId;
            
            // Determine which reCAPTCHA widget to check based on form ID
            switch(formId) {
                case 'general-feedback-form': recaptchaId = 'general'; break;
                case 'support-request-form': recaptchaId = 'support'; break;
                case 'feature-request-form': recaptchaId = 'feature'; break;
                case 'bug-report-form': recaptchaId = 'bug'; break;
                default: recaptchaId = null;
            }
            
            // If we have a valid reCAPTCHA widget ID, verify it
            if (recaptchaId && typeof recaptchaWidgets !== 'undefined') {
                const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgets[recaptchaId]);
                
                if (!recaptchaResponse) {
                    alert("Please complete the reCAPTCHA verification.");
                    return;
                }
                
                // Add reCAPTCHA response to the data we'll send
                const formData = new FormData(this);
                const data = {};
                formData.forEach((value, key) => {
                    data[key] = value;
                });
                
                // Add the recaptcha token
                data.recaptchaToken = recaptchaResponse;
                
                // Continue with form processing
                data.formType = formId;
                data.submittedAt = new Date().toISOString();
                
                // Implement submission throttling - store last submission time
                const lastSubmission = localStorage.getItem('lastFormSubmission');
                const currentTime = new Date().getTime();
                
                if (lastSubmission && (currentTime - parseInt(lastSubmission)) < 10000) { // 10 second cooldown
                    alert("Please wait a few seconds before submitting another form.");
                    return;
                }
                
                // Record this submission time
                localStorage.setItem('lastFormSubmission', currentTime.toString());
                
                // Send data to Google Sheets via the web app URL
                submitToGoogleSheet(data, formId);
                
                // Reset reCAPTCHA widget
                grecaptcha.reset(recaptchaWidgets[recaptchaId]);
                
                // Reset the form
                form.reset();
                
                // If there's a file input, reset its value manually
                const fileInputs = form.querySelectorAll('input[type="file"]');
                fileInputs.forEach(input => {
                    input.value = '';
                });
                
                // Disable submit button again
                const submitButton = form.querySelector('button[type="submit"]');
                if (submitButton) {
                    submitButton.disabled = true;
                }
            } else {
                // No valid reCAPTCHA found - show error
                console.error('No valid reCAPTCHA widget found for form:', formId);
                alert("reCAPTCHA verification failed. Please reload the page and try again.");
            }
        });
    });
    
    // Function to submit data to Google Sheets
    function submitToGoogleSheet(data, formId) {
        // Show loading state
        const form = document.getElementById(formId);
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerText;
        submitButton.innerText = "Submitting...";
        submitButton.disabled = true;
        
        // Get the Google Apps Script Web App URL from the form's data attribute
        // You'll need to update this URL with your actual Google Apps Script Web App URL
        const scriptURL = form.getAttribute('data-script-url') || 
                          'https://script.google.com/macros/s/YOUR_GOOGLE_APPS_SCRIPT_DEPLOYMENT_ID/exec';
        
        // For file uploads, we'd need a different approach - for now, noting that files were attached
        if (data.screenshot) {
            data.screenshot = "File was attached (Files not stored in Google Sheets)";
        }
        if (data['bug-screenshot']) {
            data['bug-screenshot'] = "File was attached (Files not stored in Google Sheets)";
        }
        
        // Convert data to query string for simpler submission
        const queryString = Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&');
        
        // Use fetch API to send data to Google Sheets
        fetch(scriptURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: queryString,
            mode: 'no-cors' // This is important for CORS issues with Google Apps Script
        })
        .then(response => {
            console.log('Form submitted successfully', data);
            // Show success message
            showSuccessMessage(formId, true);
            
            // Reset button state
            submitButton.innerText = originalButtonText;
            submitButton.disabled = false;
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            // Show error message
            showErrorMessage(formId);
            
            // Reset button state
            submitButton.innerText = originalButtonText;
            submitButton.disabled = false;
        });
    }
    
    // Success message creation and display
    function showSuccessMessage(formId, isGoogleSheets = false) {
        // Check if a success message already exists, and remove it
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        
        // Set message content based on form type
        let messageTitle, messageContent;
        
        switch(formId) {
            case 'general-feedback-form':
                messageTitle = 'Feedback Submitted';
                messageContent = 'Thank you for your feedback! Your insights help us improve ARGON.';
                break;
            case 'support-request-form':
                messageTitle = 'Support Request Received';
                messageContent = 'We\'ve received your support request and will get back to you soon. Our team typically responds within 24-48 hours.';
                break;
            case 'feature-request-form':
                messageTitle = 'Feature Request Submitted';
                messageContent = 'Thanks for your feature suggestion! We\'ll review it carefully and consider it for future updates.';
                break;
            case 'bug-report-form':
                messageTitle = 'Bug Report Received';
                messageContent = 'Thank you for reporting this bug. Our team will investigate the issue and work on a fix.';
                break;
            default:
                messageTitle = 'Submission Successful';
                messageContent = 'Thank you for your submission. We\'ve received your information.';
        }
        
        if (isGoogleSheets) {
            messageContent += ' Your data has been recorded in our feedback system.';
        }
        
        successMessage.innerHTML = `
            <h3>${messageTitle}</h3>
            <p>${messageContent}</p>
        `;
        
        // Add the message to the form section
        const formSection = document.getElementById(formId).closest('.feedback-section');
        formSection.prepend(successMessage);
        
        // Add visible class to trigger animation
        setTimeout(() => {
            successMessage.classList.add('visible');
        }, 10);
        
        // Automatically hide the message after 8 seconds
        setTimeout(() => {
            successMessage.classList.remove('visible');
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 8000);
    }
    
    // Show error message
    function showErrorMessage(formId) {
        // Remove existing error messages
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `
            <h3>Submission Error</h3>
            <p>There was a problem submitting your form. Please try again or contact us directly at admin@aroice.in.</p>
        `;
        
        // Add to form section
        const formSection = document.getElementById(formId).closest('.feedback-section');
        formSection.prepend(errorMessage);
        
        // Add visible class for animation
        setTimeout(() => {
            errorMessage.classList.add('visible');
        }, 10);
        
        // Auto hide after 10 seconds
        setTimeout(() => {
            errorMessage.classList.remove('visible');
            setTimeout(() => {
                errorMessage.remove();
            }, 300);
        }, 10000);
    }
    
    // Field validation
    const textInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    
    textInputs.forEach(input => {
        // Show validation feedback when input loses focus
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Clear validation errors when user starts typing again
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                
                // Find and remove error message if it exists
                const errorElement = this.parentElement.querySelector('.error-feedback');
                if (errorElement) {
                    errorElement.remove();
                }
            }
        });
    });
    
    function validateField(field) {
        // Skip validation if the field is not required and empty
        if (!field.required && field.value.trim() === '') {
            return true;
        }
        
        // Email validation
        if (field.type === 'email' && field.value.trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Required field validation
        if (field.required && field.value.trim() === '') {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        return true;
    }
    
    function showFieldError(field, message) {
        // Add error class to the field
        field.classList.add('error');
        
        // Check if there's already an error message
        const existingError = field.parentElement.querySelector('.error-feedback');
        if (existingError) {
            existingError.textContent = message;
            return;
        }
        
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.className = 'error-feedback';
        errorElement.textContent = message;
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
        errorElement.style.animation = 'fadeIn 0.3s ease-in-out';
        
        // Add error message after the field
        field.parentElement.appendChild(errorElement);
    }
    
    // Add form submission hint to help center link
    const helpCenterLink = document.querySelector('a[href="index.html"]');
    if (helpCenterLink) {
        helpCenterLink.addEventListener('click', function(e) {
            // Check if any form has been partially filled out
            let formHasData = false;
            
            forms.forEach(form => {
                const inputs = form.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                    if ((input.type === 'text' || input.type === 'email' || input.tagName === 'TEXTAREA' || input.tagName === 'SELECT') 
                        && input.value.trim() !== '') {
                        formHasData = true;
                    } else if (input.type === 'checkbox' && input.checked) {
                        formHasData = true;
                    } else if (input.type === 'radio' && input.checked) {
                        formHasData = true;
                    }
                });
            });
            
            if (formHasData) {
                if (!confirm('You have unsaved form data. Are you sure you want to leave this page?')) {
                    e.preventDefault();
                }
            }
        });
    }
    
    // Add additional security-focused CSS
    const securityStyles = document.createElement('style');
    securityStyles.textContent = `
        .security-notice {
            background-color: rgba(30, 144, 255, 0.1);
            border-left: 4px solid var(--primary-color);
            padding: 0.8rem 1.2rem;
            margin-bottom: 1.5rem;
            border-radius: 4px;
            font-size: 0.9rem;
        }
        
        .recaptcha-container {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    `;
    document.head.appendChild(securityStyles);
    
    console.log("ARGON Feedback Portal initialized with enhanced security measures.");
});
