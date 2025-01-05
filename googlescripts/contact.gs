function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.message
  ]);

  const emailBody = `
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
    htmlBody: emailBody
  });

  return ContentService.createTextOutput("Success");
} 