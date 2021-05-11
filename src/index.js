//👨‍🏫Your task: On your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.
//🙀 Bonus point:Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.

let now = new Date();

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let currentDate = document.querySelector("#date");
currentDate.innerHTML = `${day}, ${month} ${date}, ${year}`;

let currentTime = document.querySelector("#time");
currentTime.innerHTML = `${hour}:${minutes}`;

function newCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-city");
  let displayCity = document.querySelector("#city");
  displayCity.innerHTML = `${cityInput.value}`;

  let apiKey = "bc766047da4be50eec5c8a32f704ebc3";
  let city = `${cityInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}
let formCity = document.querySelector("#city-form");
formCity.addEventListener("submit", newCity);

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#main-temp");
  temperatureElement.innerHTML = `${temperature}`;
  console.log(response);
  document.querySelector("#highs").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#lows").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

//function changeFahrenheit(event) {
//  event.preventDefault();
//  let inFahrenheit = document.querySelector("#main-temp");
//  inFahrenheit.innerHTML = `71`;
//}
//let linkFahrenheit = document.querySelector("#link-fahrenheit");
//linkFahrenheit.addEventListener("click", changeFahrenheit);

//function changeCelsius(event) {
//  event.preventDefault();
//  let inCelsius = document.querySelector("#main-temp");
//  inCelsius.innerHTML = `23`;
//}
//let linkCelsius = document.querySelector("#link-celsius");
//linkCelsius.addEventListener("click", changeCelsius);
