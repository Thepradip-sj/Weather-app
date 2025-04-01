const apikey="68bbfcce5d1c807ec79a1be66ad7d409";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{

    
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds"){
            weathericon.src="assets/weather-app-img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src="assets/weather-app-img/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src="assets/weather-app-img/drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src="assets/weather-app-img/snow.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src="assets/weather-app-img/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src="assets/weather-app-img/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
}
)

