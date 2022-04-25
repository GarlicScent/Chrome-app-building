const city = document.querySelector("#js-weather span:first-child");
const weather = document.querySelector("#js-weather span:last-child");

const API_KEYS = "0829b5f8d1118899664cd0296b5e8976";

function onGeoSuccess(position) {
  // console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const base_url = "https://api.openweathermap.org/data/2.5/weather";
  const url = `${base_url}?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    });
}
function onGeoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
