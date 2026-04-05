const apiKey = "ddd19d9a47ccc9a29728517edf2b2a92";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const btn = document.querySelector(".btn");
const input = document.querySelector(".search-input");
const icon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);

  if (response.status === 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clear") {
      icon.src = "images/clear.png";
    }
    if (data.weather[0].main === "Clouds") {
      icon.src = "images/clouds.png";
    }
    if (data.weather[0].main === "Drizzle") {
      icon.src = "images/drizzle.png";
    }
    if (data.weather[0].main === "Mist") {
      icon.src = "images/mist.png";
    }
    if (data.weather[0].main === "Rain") {
      icon.src = "images/rain.png";
    }
    if (data.weather[0].main === "Snow") {
      icon.src = "images/snow.png";
    }

    error.style.display = "none";
    weather.style.display = "flex";
  }
}

btn.addEventListener("click", () => {
  checkWeather(input.value);
});
