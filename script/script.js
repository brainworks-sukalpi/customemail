let count1 = 0;
function assuranceOfDeliveryFunction(x) {
    count1++;
    var assurance = document.getElementById("assuranceOfDelivery");
    
    var div1 = document.createElement("div");
    var input1 = document.createElement("input");
    var label1 = document.createElement("label");

    div1.setAttribute("class","form-check")

    input1.setAttribute("type","radio"); 
    input1.setAttribute("class","form-check-input assuranceDeliveryRadio");
    input1.setAttribute("name","Delivery Assurance Texts");
    input1.setAttribute("id", "radio" + count1);
    input1.setAttribute("value", x);
    input1.setAttribute("onclick", "assuranceText(id)");
    
    label1.setAttribute("class","form-check-label");
    label1.setAttribute("for","radio" + count1);
    label1.innerHTML = x;
    
    div1.appendChild(input1);
    div1.appendChild(label1);
    assurance.appendChild(div1);
}

let count2 = 0;
function hookExampleFunction(y) {
    count2++;
    var hook = document.getElementById("hookExampleId");
    
    var div1 = document.createElement("div");
    var input1 = document.createElement("input");
    var label1 = document.createElement("label");

    div1.setAttribute("class","form-check")

    input1.setAttribute("type","checkbox");
    input1.setAttribute("class","form-check-input");
    input1.setAttribute("name","Hook Example Text");
    input1.setAttribute("id", "hookCheck" + count2);
    input1.setAttribute("value", y);
    // input1.setAttribute("onclick", "hookText(id)");
    
    label1.setAttribute("class","form-check-label");
    label1.setAttribute("for","hookCheck" + count2);
    label1.innerHTML = y;
    
    div1.appendChild(input1);
    div1.appendChild(label1);
    hook.appendChild(div1);
}

let count3 = 0;
function qualificationFunction(y) {
    count3++;
    var qualification = document.getElementById("qualification");
    
    var div1 = document.createElement("div");
    var input1 = document.createElement("input");
    var label1 = document.createElement("label");

    div1.setAttribute("class","form-check")

    input1.setAttribute("type","radio");
    input1.setAttribute("class","form-check-input");
    input1.setAttribute("name","Qualification Text");
    input1.setAttribute("id", "qualificationRadio" + count3);
    input1.setAttribute("value", y);
    input1.setAttribute("onclick", "introSelfText(id)");
    
    label1.setAttribute("class","form-check-label");
    label1.setAttribute("for","qualificationRadio" + count3);
    label1.innerHTML = y;
    
    div1.appendChild(input1);
    div1.appendChild(label1);
    qualification.appendChild(div1);
}

let count4 = 0;
function whyUsFunction(y) {
    count4++;
    var whyUs = document.getElementById("whyUsId");
    
    var div1 = document.createElement("div");
    var input1 = document.createElement("input");
    var label1 = document.createElement("label");

    div1.setAttribute("class","form-check")

    input1.setAttribute("type","checkbox");
    input1.setAttribute("class","form-check-input");
    input1.setAttribute("name","Why Us Reasons");
    input1.setAttribute("id", "whyus" + count4);
    input1.setAttribute("value", y);
    
    label1.setAttribute("class","form-check-label");
    label1.setAttribute("for","whyus" + count4);
    label1.innerHTML = y;
    
    div1.appendChild(input1);
    div1.appendChild(label1);
    whyUs.appendChild(div1);
}

let count5 = 0;
function prevProjectFunction(y) {
    count5++;
    var prevProject = document.getElementById("previousProjectsId");
    
    var div1 = document.createElement("div");
    var input1 = document.createElement("input");
    var label1 = document.createElement("label");

    div1.setAttribute("class","form-check")

    input1.setAttribute("type","checkbox");
    input1.setAttribute("class","form-check-input");
    input1.setAttribute("name","Why Us Reasons");
    input1.setAttribute("id", "prevProject" + count5);
    input1.setAttribute("value", y);
    
    label1.setAttribute("class","form-check-label");
    label1.setAttribute("for","prevProject" + count5);
    label1.innerHTML = y;
    
    div1.appendChild(input1);
    div1.appendChild(label1);
    prevProject.appendChild(div1);
}

let count6 = 0;
function closingFunction(y) {
    count6++;
    var closing = document.getElementById("closingId");
    
    var div1 = document.createElement("div");
    var input1 = document.createElement("input");
    var label1 = document.createElement("label");

    div1.setAttribute("class","form-check")

    input1.setAttribute("type","radio");
    input1.setAttribute("class","form-check-input");
    input1.setAttribute("name","Closing Text");
    input1.setAttribute("id", "closingRadio" + count6);
    input1.setAttribute("value", y);
    input1.setAttribute("onclick", "closingText(id)");
    
    label1.setAttribute("class","form-check-label");
    label1.setAttribute("for","closingRadio" + count6);
    label1.innerHTML = y;
    
    div1.appendChild(input1);
    div1.appendChild(label1);
    closing.appendChild(div1);
}

var hookExampleText = "";
var deliveryAssuranceTextArray = [];
function makeApiCallOpening() {
    var params = {
        spreadsheetId: '1-i6XHA0iios-t0AKoN4riMC1dnBVZDVu-Y6RwmSLx2M',
        range: 'Opening!A2:Z',  
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
    arr = response.result.values;
    hookExampleText = arr[0][1];
    document.getElementById("hookExampleInputTextArea").value = hookExampleText;

    count1 = 0;
    count2 = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i][0] !== "") {
            deliveryAssuranceTextArray.push(arr[i][0]);
            assuranceOfDeliveryFunction(deliveryAssuranceTextArray[i]);
            console.log(arr[i]);
        }
    }
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}

var qualificationTextArray = [];
function makeApiCallIntroSelf() {
    var params = {
        spreadsheetId: '1-i6XHA0iios-t0AKoN4riMC1dnBVZDVu-Y6RwmSLx2M',
        range: 'Intro Self!A2:Z',  
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
    arr = response.result.values;

    count3 = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i][0] !== "") {
            qualificationTextArray.push(arr[i][0]);
            qualificationFunction(qualificationTextArray[i]);
            console.log(arr[i]);
        }
    }
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}

function makeApiCallWhyUs() {
    var params = {
        spreadsheetId: '1-i6XHA0iios-t0AKoN4riMC1dnBVZDVu-Y6RwmSLx2M',
        range: 'Why Us!A2:Z',  
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
    arr = response.result.values;

    count4 = 0;
    for(var i=0; i<arr.length; i++) {

        if(arr[i] !== "") {
            whyUsFunction(arr[i]);
            console.log(arr[i]);
        }
    }
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}

var prevProjectArray = [];
var keywords = [];
function makeApiCallPreviousProjects() {
    var params = {
        spreadsheetId: '1-i6XHA0iios-t0AKoN4riMC1dnBVZDVu-Y6RwmSLx2M',
        range: 'Previous Projects!A2:Z',  
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
    arr = response.result.values;
    count5 = 0;
    for(var i=0; i<arr.length; i++) {
        keywords.push(arr[i][2]);
        var a = [];

        a.push(arr[i][0]);
        a.push(arr[i][1]);
        prevProjectArray.push(a);
        prevProjectFunction(arr[i][0]);
        hookExampleFunction(arr[i][0]);
        console.log(arr[i]);
    }
    keywordArrayMaking();
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}

var closingStatement = "";
function makeApiCallClosing() {
    var params = {
        spreadsheetId: '1-i6XHA0iios-t0AKoN4riMC1dnBVZDVu-Y6RwmSLx2M', 
        range: 'Closing!A2:Z',  
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
    arr = response.result.values;

    count6 = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i][1] !== "") {
            closingFunction(arr[i][1]);
            console.log(arr[i]);
        }
    }
    closingStatement = arr[0][0];
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}

function pitchFunction(x) {
    var pitch = document.getElementById("exampleFormControlSelect1");
    
    var option = document.createElement("option");
    option.innerHTML = x;
    pitch.appendChild(option);
}

function makeApiCallPitchType() {
    var params = {
        spreadsheetId: '1-i6XHA0iios-t0AKoN4riMC1dnBVZDVu-Y6RwmSLx2M', 
        range: 'Pitch Type!A2:Z',  
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
    arr = response.result.values;

    for(var i=0; i<arr.length; i++) {
        if(arr[i] !== "") {
            pitchFunction(arr[i]);
            console.log(arr[i]);
        }
    }
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}

function assuranceText(id) {
    var textarea = document.getElementById("assuranceDeliveryInputTextArea");
    var text = document.getElementById(id);

    textarea.value = text.value;
}

// function hookText(id) {
//     var textarea = document.getElementById("hookExampleInputTextArea");
//     var text = document.getElementById(id);

//     if(text.checked == true)
//         textarea.value += text.value + " ";
// }

function introSelfText(id) {
    var textarea = document.getElementById("qualificationInputTextArea");
    var text = document.getElementById(id);

    textarea.value = text.value;
}

function closingText(id) {
    var textarea = document.getElementById("closingInputTextArea");
    var text = document.getElementById(id);

    var str = text.value + "\n\n" + closingStatement;
    textarea.value = str;
    console.log(closingStatement);
}

var keywordsArray = [];
function keywordArrayMaking() {

    keywordsArray = [];

    for(var i=0; i<keywords.length; i++) {
        var temp = keywords[i];

        var arr = [];
        var flag = "";
        for(var j=0; j<temp.length; j++) {
            if(temp[j] !== ",") {
                flag += temp[j];
            } else {
                arr.push(flag);
                flag = "";
            }
        }

        arr.push(flag);
        keywordsArray.push(arr);
    }
    // console.log(keywordsArray);
}

function searchHookFunction() {
    var input, filter, element, div;
    input = document.getElementById("searchHookId");
    filter = input.value.toUpperCase();

    element = document.getElementById("hookExampleId");
    div = element.getElementsByClassName("form-check")
    
    let arr = [];
    for(var i=0; i<div.length; i++) {
        let temp = div[i].getElementsByTagName("input")[0];
        arr.push(temp.value);
    }

    for(var i=0; i<arr.length; i++) {
        var txtValue = arr[i];

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "block";
        } 
        else {
            div[i].style.display = "none";
        }
    }

    // keywordArrayMaking();
    
    for(var i=0; i<keywordsArray.length; i++) {
        var txtValue = keywordsArray[i];

        for(var j=0; j<txtValue.length; j++) {
            var flag = txtValue[j];

            if (flag.toUpperCase().indexOf(filter) > -1) {
                div[i].style.display = "block";
            }     
        }
    }
}

function searchPrevProjectFunction() {
    var input, filter, element, div;
    input = document.getElementById("searchProjectId");
    filter = input.value.toUpperCase();

    element = document.getElementById("previousProjectsId");
    div = element.getElementsByClassName("form-check")
    
    let arr = [];
    for(var i=0; i<div.length; i++) {
        let temp = div[i].getElementsByTagName("input")[0];
        arr.push(temp.value);
    }

    for(var i=0; i<arr.length; i++) {
        var txtValue = arr[i];

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }

    // keywordArrayMaking();
    
    for(var i=0; i<keywordsArray.length; i++) {
        var txtValue = keywordsArray[i];

        for(var j=0; j<txtValue.length; j++) {
            var flag = txtValue[j];

            if (flag.toUpperCase().indexOf(filter) > -1) {
                div[i].style.display = "block";
            }     
        }
    }
}

function updateFunction() {
    var innerText = "";
    var openingText = "";
    var introText = "";
    var prevProjectsText = "";
    var whyUsText = "";
    var closingText = "";
    
    if(document.getElementById("openingToggle").checked == true) {
        if(document.getElementById("passcode").value !== "") {
            openingText += document.getElementById("passcode").value + "\n";
        }
        openingText += "Hi ";
        if(document.getElementById("clientName").value !== "") {
            openingText += document.getElementById("clientName").value + ",";
        } else {
            openingText += "there,";
        }
        openingText += "\n\n";
        
        if(document.getElementById("problemUnderstanding").value !== "") {
            openingText += "Greetings! Hope you're doing great. I have read through the project description and ";
            openingText += document.getElementById("problemUnderstanding").value + " ";
        }
        
        if(document.getElementById("assuranceDeliveryInputTextArea").value !== "") {
            openingText += document.getElementById("assuranceDeliveryInputTextArea").value + " ";
        }
    
        if(document.getElementById("hookExampleInputTextArea").value !== "") {
            openingText += document.getElementById("hookExampleInputTextArea").value + " ";
        }
    
        var element, div;
        element = document.getElementById("hookExampleId");
        div = element.getElementsByClassName("form-check")
        
        for(var i=0; i<div.length; i++) {
            let temp = div[i].getElementsByTagName("input")[0];
            if(temp.checked == true) {
                openingText += prevProjectArray[i][0] + " ";
                openingText += "(" + prevProjectArray[i][1] + "). ";
            }
        }

        innerText += openingText;
        innerText += "\n\n";
    } else {
        innerText += "";
    }

    if(document.getElementById("introToggle").checked == true) {
        if(document.getElementById("qualificationInputTextArea").value !== "") {
            introText += document.getElementById("qualificationInputTextArea").value;
        }
        introText += "\n\n";
        innerText += introText;
    } else {
        innerText += "";
    }

    if(document.getElementById("projectToggle").checked == true) {
        
        prevProjectsText += "Here are some of the latest examples of my relevant projects:\n"    
        var element, div;
        element = document.getElementById("previousProjectsId");
        div = element.getElementsByClassName("form-check")
        
        let countLine = 1;
        for(var i=0; i<div.length; i++) {
            let temp = div[i].getElementsByTagName("input")[0];
            if(temp.checked == true) {
                prevProjectsText += countLine;
                prevProjectsText += ". ";
                prevProjectsText += prevProjectArray[i][0] + ": ";
                prevProjectsText += prevProjectArray[i][1] + "\n";
                countLine++;
            }
        }

        innerText += prevProjectsText;
        innerText += "\n";
    } else {
        innerText += "";
    }

    if(document.getElementById("whyUsToggle").checked == true) {
        
        whyUsText += "Why must you hire me?\n"; 
        var element, div;
        
        element = document.getElementById("whyUsId");
        div = element.getElementsByClassName("form-check")
        
        let countLine = 1;
        for(var i=0; i<div.length; i++) {
            let temp = div[i].getElementsByTagName("input")[0];
            if(temp.checked == true) {
                whyUsText += countLine;
                whyUsText += ". ";
                whyUsText += temp.value + "\n";
                countLine++;
            }
        }
        innerText += whyUsText;
        innerText += "\n";
    } else {
        innerText += "";
    }

    if(document.getElementById("closingToggle").checked == true) {
        
        if(document.getElementById("closingInputTextArea").value !== "") {
            closingText += document.getElementById("closingInputTextArea").value;
        }
        innerText +=  closingText;
    } else {
        innerText += "";
    }
    
    document.getElementById("outputTextAreaId").value = innerText;
}

function hookExampleToggleFunction() {
    if(document.getElementById("hookExampleToggle").checked == true) {
        document.getElementById("hookExampleInputTextArea").value = hookExampleText;
    } else {
        document.getElementById("hookExampleInputTextArea").value = "";
    }
}

$(document).ready(function() {
    $('#signout-button').click(function() {
        location.reload();
    });
});

function initClient() {
    var API_KEY = 'AIzaSyCyolaysIW45JucdDsnJpntGBrOIzNqy78';  
    var CLIENT_ID = '852553931502-39ii9g32hqkiqnh23h8038npoh94b8a3.apps.googleusercontent.com';
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
        document.getElementById("signin-button").style.visibility = "hidden";
        document.getElementById("signout-button").style.display = "inline";
        makeApiCallOpening();
        makeApiCallIntroSelf();
        makeApiCallPreviousProjects();
        makeApiCallWhyUs();
        makeApiCallClosing();
        makeApiCallPitchType();

        document.getElementById("signin-button").style.visibility = "hidden";
        document.getElementById("signout-button").style.visibility = "visible";
    }
}

function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
    document.getElementById("signin-button").style.visibility = "hidden";
    document.getElementById("signout-button").style.visibility = "visible";
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
    document.getElementById("signout-button").style.visibility = "hidden";
    document.getElementById("signin-button").style.visibility = "visible";
}

var dealValue = "";
var pitchType = "";
var pitchText = "";
function submitFunction() {
    dealValue = document.getElementById("dealValue").value;
    pitchType = document.getElementById("exampleFormControlSelect1").value;
    pitchText = document.getElementById("outputTextAreaId").value;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
        dd='0'+dd;

    if(mm<10) 
        mm='0'+mm;
        
    var date = dd+'/'+mm+'/'+yyyy;

    var params = {
        spreadsheetId: '1-i6XHA0iios-t0AKoN4riMC1dnBVZDVu-Y6RwmSLx2M', 
        range: 'Pitches!A2:Z',  
        valueInputOption: "USER_ENTERED",
    };

    var valueRangeBody = {
        "majorDimension": "ROWS",
        "values": [
            [date,
            dealValue,
            pitchType,
            pitchText]
        ]
    };

    var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function(response) {
    console.log(response.result);
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}

