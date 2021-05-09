// web app: https://script.google.com/macros/s/AKfycbySoZLsLRgriC8585SMQ_PH2tj6BW80H4EjAprV2jS997uJ24qOR36d5rlkAcJUNUTIjQ/exec

function doGet() {
  
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Opening");
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