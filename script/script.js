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
    input1.setAttribute("onclick", "hookText(id)");
    
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
async function openingData() {

    const url = "https://script.google.com/macros/s/AKfycbySoZLsLRgriC8585SMQ_PH2tj6BW80H4EjAprV2jS997uJ24qOR36d5rlkAcJUNUTIjQ/exec"
    await fetch(url)
        .then(d => d.json())
        .then(d => {

            count1 = 0;
            count2 = 0;

            for(let i=0; i<d[0].data.length; i++)
            {
                if(d[0].data[i]["Delivery Assurance Texts"] !== "")
                    assuranceOfDeliveryFunction(d[0].data[i]["Delivery Assurance Texts"]);
            }

            hookExampleText = d[0].data[0]["Hook Example Text"];
            // for(let i=0; i<d[0].data.length; i++)
            // {
            //     if(d[0].data[i]["Hook Example Text"] !== "")
            //         hookExampleFunction(d[0].data[i]["Hook Example Text"]);
            // }
            // console.log(hookExampleText);
            document.getElementById("hookExampleInputTextArea").value = hookExampleText;
    });
}

async function introSelfData() {

    const url = "https://script.google.com/macros/s/AKfycbz7EYh194KTPdgHxq-QAGW3pklynE2XrwSuIxZjBwJ2NLY2n1PaCDaxHrZH3AwyMx4xQw/exec";
    await fetch(url)
        .then(d => d.json())
        .then(d => {

            count3 = 0;
            for(let i=0; i<d[0].data.length; i++)
            {
                if(d[0].data[i]["Qualification Text"] !== "")
                    qualificationFunction(d[0].data[i]["Qualification Text"]);
            }
    });
}

async function whyUsData() {

    const url = "https://script.google.com/macros/s/AKfycby9t1C4xxfarCghkUqJ6udhuFjixfabBNCAXECK6GPO1pGyBiwSmJkNDYmHh66JibLnmg/exec";
    await fetch(url)
        .then(d => d.json())
        .then(d => {

            count4 = 0;
            for(let i=0; i<d[0].data.length; i++)
            {
                if(d[0].data[i]["Why Us Reasons"] !== "")
                    whyUsFunction(d[0].data[i]["Why Us Reasons"]);
            }
    });
}

var prevProjectArray = [[]];
var keywords = [];
async function projectData() {

    const url = "https://script.google.com/macros/s/AKfycbzlt-oNvLvEobvjZvYu9uQ8wv6GiFtWqc9zGlcpYbee4n3QoMy0pRa263MVE0KfWErDQw/exec";
    await fetch(url)
        .then(d => d.json())
        .then(d => {

            count5 = 0;
            // prevProjectArray = [[]];
            for(let i=0; i<d[0].data.length; i++)
            {
                if(d[0].data[i]["Project Name"] !== "") {
                    prevProjectFunction(d[0].data[i]["Project Name"]);
                    hookExampleFunction(d[0].data[i]["Project Name"]);
                
                    var arr = [];
                    arr.push(d[0].data[i]["Project Name"]);
                    arr.push(d[0].data[i]["Link"]);
                    keywords.push(d[0].data[i]["Keywords"]);

                    prevProjectArray.push(arr);
                }    
            }
            // console.log(keywords);
    });
}

var closingStatement = "";
async function closingData() {

    const url = "https://script.google.com/macros/s/AKfycbynA6KZy9ZJQ1oxT1yqc2HcodUQRkO7rokahr33xW3uvQSFtEUYWdABroScbiY5BztssA/exec";
    await fetch(url)
        .then(d => d.json())
        .then(d => {

            count6 = 0;
            for(let i=0; i<d[0].data.length; i++)
            {
                if(d[0].data[i]["Portfolio Text"] !== "")
                    closingFunction(d[0].data[i]["Portfolio Text"]);
            }

            closingStatement = d[0].data[0]["Closing Text"];
    });
}

function assuranceText(id) {
    var textarea = document.getElementById("assuranceDeliveryInputTextArea");
    var text = document.getElementById(id);

    textarea.value = text.value;
}

function hookText(id) {
    var textarea = document.getElementById("hookExampleInputTextArea");
    var text = document.getElementById(id);

    if(text.checked == true)
        textarea.value += text.value + " ";
}

function introSelfText(id) {
    var textarea = document.getElementById("qualificationInputTextArea");
    var text = document.getElementById(id);

    textarea.value = text.value;
}

function closingText(id) {
    var textarea = document.getElementById("closingInputTextArea");
    var text = document.getElementById(id);

    var str = text.value + "\n" + closingStatement;
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
    // .getElementsByClassName("form-check-label");

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

    keywordArrayMaking();
    
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
    // .getElementsByClassName("form-check-label");

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

    keywordArrayMaking();
    
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

$(document).ready(function() {
    openingData();
    introSelfData();
    whyUsData();
    projectData();
    closingData();
    keywordArrayMaking();
});

