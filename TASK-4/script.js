const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");

const cityText = document.getElementById("city");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const condition = document.getElementById("condition");

async function getWeather(lat, lon, cityName){

    try{

        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,weather_code`
        );

        const data = await response.json();

        cityText.textContent = cityName;
        temperature.textContent = "Temperature : " + data.current.temperature_2m + " °C";
        wind.textContent = "Wind Speed : " + data.current.wind_speed_10m + " km/h";
        condition.textContent = "Weather Code : " + data.current.weather_code;

    }

    catch(error){

        alert("Unable to fetch weather.");

    }

}

async function searchCity(){

    const city = document.getElementById("cityInput").value;

    if(city === ""){
        return;
    }

    try{

        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );

        const data = await response.json();

        if(!data.results){

            alert("City not found");
            return;

        }

        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude;

        getWeather(latitude,longitude,data.results[0].name);

    }

    catch(error){

        alert("Error");

    }

}

locationBtn.addEventListener("click",function(){

    navigator.geolocation.getCurrentPosition(function(position){

        getWeather(
            position.coords.latitude,
            position.coords.longitude,
            "Current Location"
        );

    });

});

searchBtn.addEventListener("click",searchCity);