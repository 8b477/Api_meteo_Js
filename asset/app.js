const divImg = document.getElementById('img');
const sky = document.getElementById('sky');

const keyApi = '6099b95f4619a17948fa9904ca6bea01';
let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=Couvin&appid=${keyApi}&units=metric&lang=fr`;
let xhr = new XMLHttpRequest();
xhr.open("GET", requestURL, true);
xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status !== 200) {
        return
    }
    let response = xhr.response;
    document.getElementById('city').innerHTML = response.name.toString() + " " + response.sys.country.toString();
    document.getElementById('deg').innerHTML = Math.round(response.main.temp).toString() + "°C";
    document.getElementById('deg_mini').innerHTML = parseInt(Math.round(response.main.temp_min)).toString() + "°C" + " max";
    document.getElementById('deg_max').innerHTML = parseInt(Math.round(response.main.temp_max)).toString() + "°C" + " min";
    document.getElementById('sky').innerHTML = response.weather[0].description.toString();
    document.getElementById('humidity').innerHTML = " Humidité " +parseInt(response.main.humidity).toString() + "%";
    changeImg();
}

xhr.send();
//function for new city weather


//function call with btn
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    let inputCity = document.getElementById('inputCity').value;
    apiCall();
});

function apiCall() {

    requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${keyApi}&units=metric&lang=fr`;
    let xhr = new XMLHttpRequest();

    xhr.open("GET", requestURL, true);
    xhr.responseType = "json";

    xhr.onload = function () {
        if (xhr.status !== 200) {
            return
        }
        let response = xhr.response;
        document.getElementById('city').innerHTML = response.name.toString() + " " + response.sys.country.toString();
        document.getElementById('deg').innerHTML = Math.round(response.main.temp).toString() + "°C";
        document.getElementById('deg_mini').innerHTML = parseInt(Math.round(response.main.temp_min)).toString() + "°C" + " max";
        document.getElementById('deg_max').innerHTML = parseInt(Math.round(response.main.temp_max)).toString() + "°C" + " min";
        document.getElementById('sky').innerHTML = response.weather[0].description.toString();
        document.getElementById('humidity').innerHTML = " Humidité " + parseInt(response.main.humidity).toString() + "%";
        changeImg();
    }
    xhr.send();
}

function changeImg(){

    if (sky.innerHTML === "couvert"){
        divImg.style.backgroundImage = 'url(/asset/pictures/nuage.jpg';
        divImg.style.backgroundSize = "cover";
    }
    if (sky.innerHTML === "partiellement nuageux"){
        divImg.style.backgroundImage = 'url(/asset/pictures/couvert.png';
        divImg.style.backgroundSize = "cover";
    }
    if (sky.innerHTML === "peu nuageux"){
        divImg.style.backgroundImage = 'url(/asset/pictures/nuageVent.jpg';
        divImg.style.backgroundSize = "cover";
    }
    if (sky.innerHTML === "légères chutes de neige"){
        divImg.style.backgroundImage = 'url(/asset/pictures/neige.jpg';
        divImg.style.backgroundSize = "cover";
    }
}