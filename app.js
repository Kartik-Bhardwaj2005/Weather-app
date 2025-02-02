const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

//search-sec
let search_input = document.querySelector(".search-bar");
let search_btn = document.querySelector(".search-icon");

//temperature-sec
let weatherIcon = document.querySelector(".weather-icon");
let discription = document.querySelector(".discription");
let city_name = document.querySelector(".city-name");
let temp = document.querySelector(".temperature");

//Humidity and WindSpeed section
let humidity = document.querySelector(".rate1");
let windSpeed = document.querySelector(".rate2");


search_btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let cityName = search_input.value
    let name = search_input.value;
    city_name.innerText = name.charAt(0).toUpperCase() + name.slice(1);
    const URL = `${BASE_URL}${cityName}&appid=28a72777adf90f5f4762273cd1b96361&units=metric`;
    weather_data(URL);
});

// API call and DOM manipulation
let weather_data = async(url) => {
    let response = await fetch(url);
    let data = await response.json();

    let icon_code = data.weather[0].icon;
    weatherIcon.style.backgroundImage = `url("http://openweathermap.org/img/wn/${icon_code}@2x.png")`;
    weatherIcon.style.backgroundSize = "contain";
    weatherIcon.style.backgroundRepeat = "no-repeat";
    weatherIcon.style.backgroundPosition = "center";
    discription.innerText = data.weather[0].description;

    temp.innerText = data.main.temp;
    temp.innerText = `${temp.innerText}℃`;

    humidity.innerText = data.main.humidity;
    humidity.innerText = `${humidity.innerText}%`;

    windSpeed.innerText = data.wind.speed;
    windSpeed.innerText = `${windSpeed.innerText}kph`;
    console.log(data);
}

window.addEventListener("load", () => {
    const URL = `${BASE_URL}Paris&appid=28a72777adf90f5f4762273cd1b96361&units=metric`;
    city_name.innerText = "Paris";
    search_input.value = "Paris";
    weather_data(URL);
})