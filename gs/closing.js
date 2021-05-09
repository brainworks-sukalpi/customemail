//web app: https://script.google.com/macros/s/AKfycbynA6KZy9ZJQ1oxT1yqc2HcodUQRkO7rokahr33xW3uvQSFtEUYWdABroScbiY5BztssA/exec
//closing 1

function doGet() {
  
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Closing");
    const data = ws.getRange("A1").getDataRegion().getValues();
    const headers = data.shift();
  
    const jsonArray = data.map(r => {
      
      let obj = {};
      headers.forEach((h, i) => {
        obj[h] = r[i];
      })
      return obj;
    });
  
    const response = [{status: 200, data: jsonArray}];
    return sendJSON(response);
  }
  
  function sendJSON(jsonResponse) {
    return ContentService.createTextOutput(JSON.stringify(jsonResponse)).setMimeType(ContentService.MimeType.JSON);
  }