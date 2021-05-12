var arr;
function makeApiCall() {
    var params = {
        spreadsheetId: '1-i6XHA0iios-t0AKoN4riMC1dnBVZDVu-Y6RwmSLx2M',  // TODO: Update placeholder value.
        range: 'Closing!A2:Z',  
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
    console.log(response.result.values);
    arr = response.result.values;
    for(var i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}

function initClient() {
    var API_KEY = 'AIzaSyCWI2OD5Sc4KjRPi7S_JaIQIgZwUJsA5-A';  
    var CLIENT_ID = '834429558732-j964hi5rjbicgeug1pat55t5e2qn6rdt.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.
    var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

    gapi.client.init({
    'apiKey': API_KEY,
    'clientId': CLIENT_ID,
    'scope': SCOPE,
    'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
    updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
    if (isSignedIn) {
    makeApiCall();
    }
}

function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

function updateFunction1() {
    
    document.getElementById("hitesh").innerHTML = arr[0] + arr[1];
}