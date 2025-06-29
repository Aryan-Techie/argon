# Google Sheets Integration Setup for ARGON Feedback Forms

This document outlines how to set up Google Sheets integration with the ARGON feedback forms to collect and organize user feedback.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Rename it to "ARGON Feedback Data" or similar
3. Create the following sheets (tabs) within the spreadsheet:
   - General Feedback
   - Support Requests
   - Feature Requests
   - Bug Reports

## Step 2: Create Headers in Each Sheet

Add the following headers to each sheet:

### General Feedback Sheet
```
Timestamp | Name | Email | Feedback Type | Rating | Feedback Message | Contact Permission
```

### Support Requests Sheet
```
Timestamp | Name | Email | Issue Type | Urgency | Browser | Issue Description
```

### Feature Requests Sheet
```
Timestamp | Name | Email | Feature Title | Feature Category | Feature Description | Notify on Implementation
```

### Bug Reports Sheet
```
Timestamp | Name | Email | Bug Title | Browser & Version | Steps to Reproduce | Expected Behavior | Actual Behavior
```

## Step 3: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any code in the script editor and paste the following:

```javascript
// Google Apps Script for ARGON Feedback Forms
const SPREADSHEET_ID = ''; // Your spreadsheet ID will be here (script will auto-populate)
const SHEET_NAMES = {
  'general-feedback-form': 'General Feedback',
  'support-request-form': 'Support Requests',
  'feature-request-form': 'Feature Requests',
  'bug-report-form': 'Bug Reports'
};

// This function processes the form submission
function doPost(e) {
  try {
    // Get the form data
    const params = e.parameter;
    const formType = params.formType;
    
    // If no form type is specified, exit
    if (!formType || !SHEET_NAMES[formType]) {
      return ContentService.createTextOutput('Invalid form type');
    }
    
    // Verify reCAPTCHA token if present
    if (params.recaptchaToken) {
      const recaptchaVerified = verifyRecaptcha(params.recaptchaToken);
      if (!recaptchaVerified) {
        return ContentService.createTextOutput('reCAPTCHA verification failed').setMimeType(ContentService.MimeType.TEXT);
      }
    }
    
    // Get the appropriate sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAMES[formType]);
    
    // If the sheet doesn't exist, create it
    if (!sheet) {
      const newSheet = ss.insertSheet(SHEET_NAMES[formType]);
      
      // Add headers based on form type
      let headers = ['Timestamp', 'Name', 'Email'];
      
      if (formType === 'general-feedback-form') {
        headers = headers.concat(['Feedback Type', 'Rating', 'Feedback Message', 'Contact Permission']);
      } else if (formType === 'support-request-form') {
        headers = headers.concat(['Issue Type', 'Urgency', 'Browser', 'Issue Description']);
      } else if (formType === 'feature-request-form') {
        headers = headers.concat(['Feature Title', 'Feature Category', 'Feature Description', 'Notify on Implementation']);
      } else if (formType === 'bug-report-form') {
        headers = headers.concat(['Bug Title', 'Browser & Version', 'Steps to Reproduce', 'Expected Behavior', 'Actual Behavior']);
      }
      
      newSheet.appendRow(headers);
    }
    
    // Prepare data for the spreadsheet based on form type
    const timestamp = params.submittedAt || new Date().toISOString();
    let rowData = [];
    
    if (formType === 'general-feedback-form') {
      rowData = [
        timestamp,
        params.name || '',
        params.email || '',
        params['feedback-type'] || '',
        params.rating || '',
        params['feedback-message'] || '',
        params['contact-permission'] === 'on' ? 'Yes' : 'No'
      ];
    } else if (formType === 'support-request-form') {
      rowData = [
        timestamp,
        params['support-name'] || '',
        params['support-email'] || '',
        params['issue-type'] || '',
        params.urgency || '',
        params.browser || '',
        params['issue-description'] || ''
      ];
    } else if (formType === 'feature-request-form') {
      rowData = [
        timestamp,
        params['feature-name'] || '',
        params['feature-email'] || '',
        params['feature-title'] || '',
        params['feature-category'] || '',
        params['feature-description'] || '',
        params['feature-notify'] === 'on' ? 'Yes' : 'No'
      ];
    } else if (formType === 'bug-report-form') {
      rowData = [
        timestamp,
        params['bug-name'] || '',
        params['bug-email'] || '',
        params['bug-title'] || '',
        params['bug-browser'] || '',
        params['bug-steps'] || '',
        params['bug-expected'] || '',
        params['bug-actual'] || ''
      ];
    }
    
    // Append data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
    
  } catch (error) {
    // Log the error and return error response
    console.error('Error processing form submission: ' + error.toString());
    return ContentService.createTextOutput('Error: ' + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

// Function to verify reCAPTCHA token
function verifyRecaptcha(token) {
  try {
    const recaptchaSecret = '6LdAKBIrAAAAAO86eI3ZlDM2LDdyd88uHNzGsa9G';
    const response = UrlFetchApp.fetch(
      'https://www.google.com/recaptcha/api/siteverify', 
      {
        method: 'post',
        payload: {
          secret: recaptchaSecret,
          response: token
        }
      }
    );
    
    const result = JSON.parse(response.getContentText());
    return result.success;
  } catch (e) {
    console.error('Error verifying reCAPTCHA:', e);
    return false;
  }
}

// This function runs when the script is first installed
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('ARGON Forms')
    .addItem('Setup Sheets', 'setupSheets')
    .addToUi();
  
  // Set the spreadsheet ID if it's not already set
  if (!SPREADSHEET_ID) {
    const scriptProperties = PropertiesService.getScriptProperties();
    scriptProperties.setProperty('SPREADSHEET_ID', SpreadsheetApp.getActiveSpreadsheet().getId());
  }
}

// Create or ensure all required sheets exist with proper headers
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Setup each sheet
  Object.entries(SHEET_NAMES).forEach(([formType, sheetName]) => {
    let sheet = ss.getSheetByName(sheetName);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      
      // Add headers based on form type
      let headers = ['Timestamp', 'Name', 'Email'];
      
      if (formType === 'general-feedback-form') {
        headers = headers.concat(['Feedback Type', 'Rating', 'Feedback Message', 'Contact Permission']);
      } else if (formType === 'support-request-form') {
        headers = headers.concat(['Issue Type', 'Urgency', 'Browser', 'Issue Description']);
      } else if (formType === 'feature-request-form') {
        headers = headers.concat(['Feature Title', 'Feature Category', 'Feature Description', 'Notify on Implementation']);
      } else if (formType === 'bug-report-form') {
        headers = headers.concat(['Bug Title', 'Browser & Version', 'Steps to Reproduce', 'Expected Behavior', 'Actual Behavior']);
      }
      
      sheet.appendRow(headers);
      
      // Format header row
      sheet.getRange(1, 1, 1, headers.length).setBackground('#4169E1').setFontColor('#FFFFFF').setFontWeight('bold');
      
      // Freeze header row
      sheet.setFrozenRows(1);
    }
  });
  
  SpreadsheetApp.getUi().alert('Sheets have been set up successfully!');
}
```

## Step 4: Deploy the Script as a Web App

1. Save your script with a name like "ARGON Feedback Processor"
2. Click on **Deploy** > **New deployment**
3. For "Type", select **Web app**
4. Fill out the form:
   - Description: "ARGON Feedback Forms Processor"
   - Execute as: "Me" (your Google account)
   - Who has access: "Anyone" (to allow form submissions from anyone)
5. Click **Deploy**
6. Copy the Web App URL that appears - this is your script URL

## Step 5: Update the Feedback Forms

1. In your ARGON website code, open the feedback.html file
2. Add the data-script-url attribute to each form with your Web App URL:
   ```html
   <form id="general-feedback-form" class="feedback-form" data-script-url="YOUR_WEB_APP_URL">
   ```
3. Repeat for all four forms, using the same URL for each
4. Also update the feedback.js file if needed, ensuring it uses the data-script-url attribute

## Step 6: Testing

1. Submit a test form for each type of feedback
2. Check your Google Sheet to verify the data was received correctly
3. If you encounter any issues, check the Google Apps Script execution logs:
   - In the Apps Script editor, go to **Executions** to view logs

## Security Considerations

- The Google Apps Script is configured to allow anonymous submissions
- For higher security, you could implement a token/key system
- Consider adding rate limiting to prevent abuse

## Data Management

- The spreadsheet will automatically organize data by form type
- You can use Google Sheets filtering and analysis tools to process the data
- Consider setting up automatic email notifications using Google Apps Script triggers
