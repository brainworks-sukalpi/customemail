//web app: https://script.google.com/macros/s/AKfycbzlt-oNvLvEobvjZvYu9uQ8wv6GiFtWqc9zGlcpYbee4n3QoMy0pRa263MVE0KfWErDQw/exec
//previous projects 1

function doGet() {
  
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Previous Projects");
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