
import config from '../config';

export function getSheetValues(callback){

  let baseURL = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/Sheet1!A1:B10?key=${config.apiKey}`;
  (async() => {

    let opts = {
      method: 'GET',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    try {
      let response = await fetch(baseURL, opts);
      let data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  })();
}

export function updateCell(col, row, val, successCallback, errorCallback) {

  let baseURL = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/Sheet1!:append`;

  (async() => {

    let opts = {
      method: 'PUT',
      body: {
        "range": 'Sheet1!',
        "majorDimension": 'ROWS',
        "values": [
          val
        ],
      }
    }
    try {
      let response = await fetch(baseURL, opts);
      let data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  })();

}