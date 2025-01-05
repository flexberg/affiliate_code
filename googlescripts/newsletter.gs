function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.openById('1eXjsX32K09swYXp5KN5GaELiuZw_86_Y4lQPUPHZOlM');
    const sheet = spreadsheet.getActiveSheet();
    
    console.log('Received data:', e.postData.contents);
    
    const data = JSON.parse(e.postData.contents);
    
    if (data.type === 'newsletter') {
      console.log('Attempting to append row with:', data.email, data.timestamp);
      
      sheet.appendRow([
        data.email,
        data.timestamp
      ]);
      
      console.log('Sending email notification');
      
      const newsletterEmailBody = `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #f8f9fa; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
              <h2 style="color: #2c3e50; margin-bottom: 15px;">New Newsletter Subscription</h2>
              <p style="margin-bottom: 10px;"><strong>Email:</strong> ${data.email}</p>
              <p style="margin-bottom: 10px;"><strong>Time:</strong> ${data.timestamp}</p>
            </div>
            <div style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
              <p>This is an automated notification from your website's newsletter system.</p>
            </div>
          </body>
        </html>`;

      MailApp.sendEmail({
        to: "felixboris05@gmail.com",
        subject: "New Newsletter Subscription",
        htmlBody: newsletterEmailBody
      });

    } else {
      // Handle contact form submission (unchanged)
      sheet.appendRow([
        data.timestamp,
        data.name,
        data.email,
        data.message
      ]);

      const contactEmailBody = `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #f8f9fa; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
              <h2 style="color: #2c3e50; margin-bottom: 15px;">New Contact Form Submission</h2>
              <p style="margin-bottom: 10px;"><strong>Name:</strong> ${data.name}</p>
              <p style="margin-bottom: 10px;"><strong>Email:</strong> ${data.email}</p>
              <p style="margin-bottom: 10px;"><strong>Time:</strong> ${data.timestamp}</p>
              <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 15px;">
                <strong>Message:</strong><br>
                ${data.message}
              </div>
            </div>
            <div style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
              <p>This is an automated notification from your website's contact form.</p>
            </div>
          </body>
        </html>`;

      MailApp.sendEmail({
        to: "felixboris05@gmail.com",
        subject: "New Contact Form Submission",
        htmlBody: contactEmailBody
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Service is running");
}