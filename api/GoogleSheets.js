
import config from '../config';
//import Google from 'googleapis';
//import { GoogleSignin } from 'react-native-google-signin';



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

  /*GoogleSignin.configure({
    scopes: [config.scope],
    webClientId: config.clientId
  }); */

  let baseURL = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/Sheet1!:append?insertDataOption=INSERT_ROWS&valueInputOption=RAW&key=${config.apiKey}`;

  (async() => {

    let opts = {
      method: 'POST',
      body: JSON.stringify({
        "range": 'Sheet1!',
        "majorDimension": 'ROWS',
        "values": [
          val
        ],
      })
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