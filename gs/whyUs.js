//Web app: https://script.google.com/macros/s/AKfycby9t1C4xxfarCghkUqJ6udhuFjixfabBNCAXECK6GPO1pGyBiwSmJkNDYmHh66JibLnmg/exec
//why us 1

function doGet() {
  
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Why Us");
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