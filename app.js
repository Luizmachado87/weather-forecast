

const key ="9d98ba0793352d68d7cbc9fd5eb1b697";

function dataOnScreen(data) {
    document.querySelector(".city").innerHTML = "Weather in " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC";
    document.querySelector(".prescience-text").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Humidity " + data.main.humidity + "%"; 
    document.querySelector(".img-prescience").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    console.log(data)
}

async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(reponse => reponse.json());
    
    dataOnScreen(data);
    
}

function clickedTheButton (){
    const city = document.querySelector(".input-city").value;
    searchCity(city);
}