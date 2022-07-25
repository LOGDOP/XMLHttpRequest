"use script";

const   inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector("#usd");

        
let data = null;

const xml = new XMLHttpRequest();

xml.open("GET", "js/current.json");
xml.responseType = "JSON";
xml.send();

xml.onload = function () {
    if (xml.status !== 200) {
        alert(`Error ${xml.status}: ${xml.statusText}`);
    }
    else {
     data = JSON.parse(xml.response);
        
    }
};

 inputRub.addEventListener("input", function () {
    inputUsd.value = (inputRub.value / data["current"]["usd"]).toFixed(2); 
   
}); 

inputUsd.addEventListener("input", function () {
    inputRub.value = (inputUsd.value * data["current"]["usd"]).toFixed(2); 
   
}); 


