function doPost(e) {
  // Get specific spreadsheet by ID
  const spreadsheet = SpreadsheetApp.openById('1eXjsX32K09swYXp5KN5GaELiuZw_86_Y4lQPUPHZOlM');
  const sheet = spreadsheet.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Rest of your code remains the same...
} 

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html')
      .setTitle('Newsletter Signup');
} 