# Secure Deployment Guide for ARGON Feedback System

GitHub Pages is excellent for hosting static content but has significant security limitations for form handling. Here are more secure deployment options:

## Option 1: Netlify Deployment (Recommended)

Netlify offers free hosting with serverless functions to securely process forms:

1. **Sign up for Netlify** - Create a free account at [netlify.com](https://www.netlify.com/)

2. **Deploy your site** - Connect your GitHub repository to Netlify

3. **Create a form handler function**:
   ```js
   // netlify/functions/submit-form.js
   const { GoogleSpreadsheet } = require('google-spreadsheet');
   const axios = require('axios');
   
   exports.handler = async function(event, context) {
     // Verify request method
     if (event.httpMethod !== "POST") {
       return { statusCode: 405, body: "Method Not Allowed" };
     }
     
     try {
       // Parse the form data
       const data = JSON.parse(event.body);
       
       // Validate reCAPTCHA token - FIXED: Make sure to use correct reCAPTCHA version (v2)
       const recaptchaToken = data.recaptchaToken;
       const recaptchaSecret = '6LdAKBIrAAAAAO86eI3ZlDM2LDdyd88uHNzGsa9G';
       
       // Call the reCAPTCHA verification API with proper content type and encoding
       const recaptchaResponse = await axios({
         method: 'post',
         url: 'https://www.google.com/recaptcha/api/siteverify',
         params: {
           secret: recaptchaSecret,
           response: recaptchaToken
         },
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         }
       });
       
       // Check if reCAPTCHA verification passed
       if (!recaptchaResponse.data.success) {
         console.error('reCAPTCHA verification failed:', recaptchaResponse.data);
         return {
           statusCode: 400,
           body: JSON.stringify({ 
             error: "reCAPTCHA verification failed", 
             details: recaptchaResponse.data['error-codes'] || [] 
           })
         };
       }
       
       // Process the data and send to Google Sheets
       // Add your Google Sheets logic here
       
       return {
         statusCode: 200,
         body: JSON.stringify({ message: "Form submitted successfully" })
       };
     } catch (error) {
       console.error('Error processing form submission:', error);
       return {
         statusCode: 500,
         body: JSON.stringify({ error: "Failed to submit form" })
       };
     }
   };
   ```

4. **Update form submission in feedback.js**:
   ```js
   async function submitToNetlify(data, formId) {
     try {
       const response = await fetch('/.netlify/functions/submit-form', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
       });
       
       if (response.ok) {
         showSuccessMessage(formId);
       } else {
         const errorData = await response.json();
         showErrorMessage(formId, errorData.error || 'Unknown error occurred');
       }
     } catch (error) {
       console.error('Error:', error);
       showErrorMessage(formId, 'Network error occurred');
     }
   }
   ```

## Troubleshooting reCAPTCHA "Invalid key type" Error

If you're seeing an "ERROR for site owner: Invalid key type" message, here are the most common causes and solutions:

1. **Version Mismatch**: Make sure you're using the right reCAPTCHA version. The key you provided is for reCAPTCHA v2 Checkbox, but you might be trying to use it with v3 or Invisible reCAPTCHA.

2. **Domain Restrictions**: Verify that the domain where you're testing the reCAPTCHA is included in the list of authorized domains in your reCAPTCHA settings at [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin).

3. **Local Testing**: If you're testing locally, add `localhost` and `127.0.0.1` to your authorized domains.

4. **Implementation Steps**:
   - Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
   - Make sure your site is registered as "reCAPTCHA v2" with the "I'm not a robot" Checkbox
   - Update your domain list to include all domains where the form will be used
   - Generate new keys if necessary

5. **HTML Implementation**: Ensure your HTML implements the reCAPTCHA correctly:
   ```html
   <!-- Correct implementation for reCAPTCHA v2 Checkbox -->
   <div class="g-recaptcha" data-sitekey="6LdAKBIrAAAAAF4SNl1J9SXs628e0PxCAMvKwH7_"></div>
   <script src="https://www.google.com/recaptcha/api.js" async defer></script>
   ```

## Option 2: Google Forms Integration

1. **Create forms in Google Forms** - Create separate forms for each feedback type
2. **Embed the forms** in your site using iframes
3. **Style the embedded forms** using custom CSS

Example:
```html
<iframe 
  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
  width="100%" 
  height="800px" 
  frameborder="0" 
  marginheight="0" 
  marginwidth="0">
  Loading…
</iframe>
```

## Option 3: FormSpree (Quick Solution)

1. **Sign up for FormSpree** - They offer a free tier
2. **Update your forms** to use FormSpree with reCAPTCHA integration:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     <!-- Your form fields -->
     <div class="g-recaptcha" data-sitekey="6LdAKBIrAAAAAF4SNl1J9SXs628e0PxCAMvKwH7_"></div>
     <input type="hidden" name="_captcha" value="true">
   </form>
   ```

## Security Best Practices (For Any Deployment)

1. **Implement rate limiting** - Prevent form spam (included in most form services)
2. **Use reCAPTCHA** - We have implemented Google's reCAPTCHA v2 with site key: `6LdAKBIrAAAAAF4SNl1J9SXs628e0PxCAMvKwH7_`
3. **Sanitize inputs** - Clean all user inputs before processing
4. **Keep API keys secure** - Never expose secret keys in client-side code (the reCAPTCHA secret key should only be used server-side)
5. **Enable CORS properly** - Set appropriate CORS headers
6. **Implement proper error handling** - Don't expose technical details in errors

## reCAPTCHA Configuration

Our reCAPTCHA is configured with the following keys:

1. **Site Key** (public, used in HTML): `6LdAKBIrAAAAAF4SNl1J9SXs628e0PxCAMvKwH7_`
2. **Secret Key** (private, used server-side only): `6LdAKBIrAAAAAO86eI3ZlDM2LDdyd88uHNzGsa9G`
3. **reCAPTCHA Type**: v2 Checkbox ("I'm not a robot")

Remember to:
- Only use the site key in client-side code (HTML)
- Only use the secret key in server-side code (never in JavaScript that runs in the browser)
- Implement server-side verification of reCAPTCHA tokens
- Test your reCAPTCHA implementation in both development and production environments
- Add all domains where your form will be used to the reCAPTCHA admin settings

## Conclusion

While GitHub Pages can host your forms, the processing should happen on a proper server for security. Netlify offers the best balance of simplicity and security for this use case.
