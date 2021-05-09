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
    
    label1.setAttribute("class","form-check-label");
    label1.setAttribute("for","hookCheck" + count2);
    label1.innerHTML = y;
    
    div1.appendChild(input1);
    div1.appendChild(label1);
    hook.appendChild(div1);
}

let count3 = 0;
function qualificationFunction(y) {
    count2++;
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
    
    label1.setAttribute("class","form-check-label");
    label1.setAttribute("for","qualificationRadio" + count3);
    label1.innerHTML = y;
    
    div1.appendChild(input1);
    div1.appendChild(label1);
    qualification.appendChild(div1);
}

async function openingData() {

    const url = "https://script.google.com/macros/s/AKfycbySoZLsLRgriC8585SMQ_PH2tj6BW80H4EjAprV2jS997uJ24qOR36d5rlkAcJUNUTIjQ/exec"
    await fetch(url)
        .then(d => d.json())
        .then(d => {

            count1 = 0;
            count2 = 0;

            for(let i=0; i<d[0].data.length; i++)
            {
                assuranceOfDeliveryFunction(d[0].data[i]["Delivery Assurance Texts"]);
            }

            for(let i=0; i<d[0].data.length; i++)
            {
                if(d[0].data[i]["Hook Example Text"] !== "")
                    hookExampleFunction(d[0].data[i]["Hook Example Text"]);
            }
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
                qualificationFunction(d[0].data[i]["Qualification Text"]);
            }
    });
}

$(document).ready(function() {
    openingData();
    introSelfData();
});

