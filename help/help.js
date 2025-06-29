document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality has been removed - dark theme only
    document.body.classList.add('dark-theme');
    
    // Tab navigation
    const navTabs = document.querySelectorAll('.nav-tab');
    const helpSections = document.querySelectorAll('.help-section');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            navTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding section
            const tabName = tab.getAttribute('data-tab');
            
            // Hide all sections first
            helpSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            const activeSection = document.getElementById(tabName);
            if (activeSection) {
                activeSection.classList.add('active');
            }
        });
    });
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Check if this item is already open
            const isOpen = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // If it wasn't open before, open it
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
    
    // Support email enhancement - Auto generate subject line and add BCC
    const supportEmailLink = document.querySelector('.primary-btn[href^="mailto:"]');
    if (supportEmailLink) {
        supportEmailLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Prompt for user info
            const userName = prompt("Please enter your name:", "");
            if (userName === null) return; // User cancelled
            
            const userIssue = prompt("Briefly describe what you need help with:", "");
            if (userIssue === null) return; // User cancelled
            
            // Generate formatted subject line
            const subject = `ARGON Support: ${userName} - ${userIssue}`;
            
            // Get base email address
            const baseEmail = this.getAttribute('href').replace('mailto:', '');
            
            // Create new mailto link with subject and BCC
            const mailtoLink = `mailto:${baseEmail}?subject=${encodeURIComponent(subject)}&bcc=contact.aryantechie@gmail.com`;
            
            // Navigate to new mailto link
            window.location.href = mailtoLink;
        });
    }
    
    // Sidebar navigation (smooth scroll)
    const sidebarLinks = document.querySelectorAll('.sidebar-link a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get the target section id
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('help-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            // If search term is empty, don't do anything
            if (searchTerm === '') {
                return;
            }
            
            // Get all searchable content
            const searchableElements = document.querySelectorAll('.help-section h3, .help-section h4, .help-section p, .faq-question h3');
            
            // Highlight matching content or scroll to the first match
            let firstMatch = null;
            
            searchableElements.forEach(element => {
                const content = element.textContent.toLowerCase();
                
                if (content.includes(searchTerm)) {
                    // Store the first match
                    if (!firstMatch) {
                        firstMatch = element;
                    }
                }
            });
            
            // Scroll to the first match if found
            if (firstMatch) {
                firstMatch.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Highlight the element briefly
                firstMatch.classList.add('highlight');
                setTimeout(() => {
                    firstMatch.classList.remove('highlight');
                }, 2000);
            }
        }, 300));
    }
    
    // Debounce function to limit how often the search runs
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    console.log("Help Center initialized in dark theme mode only.");
});
