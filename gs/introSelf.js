// Web app: https://script.google.com/macros/s/AKfycbz7EYh194KTPdgHxq-QAGW3pklynE2XrwSuIxZjBwJ2NLY2n1PaCDaxHrZH3AwyMx4xQw/exec

function doGet() {
  
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Intro Self");
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