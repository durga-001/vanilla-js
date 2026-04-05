const apiKey = "ddd19d9a47ccc9a29728517edf2b2a92";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const btn = document.querySelector(".btn");
const input = document.querySelector(".search-input");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "&deg;C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main === "Clear") {
    icon.innerHTMML.src = "images.rain.png";
  }
}

btn.addEventListener("click", () => {
  checkWeather(input.value);
});
