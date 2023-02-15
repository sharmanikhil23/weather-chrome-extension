let cityName = document.getElementById("left-current-city-name");
let currentTemp = document.getElementById("left-current-temprature");
let currentTempImg = document.getElementById("left-current-image");
let currentDesc = document.getElementById("left-current-description");
let currentFeelLike = document.getElementById("left-current-feelsLike");
let displayEssentialDetails = document.getElementById(
  "display-area-essentialDetails"
);

let displayAreaAlert = document.getElementById("display-area-alert");

const setCityName = (location) => {
  cityName.innerText = `${location.name} , ${location.region}`;
};

const setCurrentWeather = (weather) => {
  currentTemp.innerHTML = Math.round(weather.temp_c) + `&deg`;
  currentDesc.innerText = weather.condition.text;
  currentTempImg.src = `https:` + weather.condition.icon;
  currentFeelLike.innerHTML = `Feels Like ${Math.round(
    weather.feelslike_c
  )} &deg`;
};

const setEssentialDetail = (weather, forcast) => {
  forcast = forcast.forecastday[0];

  let result = `
  <div id="essential-detail" class="winds">
    <p>Wind</p>
    <p>${Math.round(weather.wind_kph)} km/h ${weather.wind_dir}</p>
  </div>
  
  <div id="essential-detail" class="humidity">
    <p>Humidity</p>
    <p>${Math.round(weather.humidity)}%</p>
  </div>
  
  <div id="essential-detail" class="uv-index">
    <p>UV Index</p>
    <p>${Math.round(weather.uv)}</p>
  </div>
  
  <div id="essential-detail" class="percip_mm">
    <p>Precip</p>
    <p>${Math.round(weather.precip_mm)}</p>
  </div>
  
  <div id="essential-detail" class="visibility">
    <p>Visibility</p>
    <p>${Math.round(weather.vis_km)} Km</p>
  </div>
  

  <div id="essential-detail" class="sun-rise">
    <p>Sun Rise</p>
    <p>${forcast.astro.sunrise}</p>
  </div>

  <div id="essential-detail" class="sun-set">
    <p>Sun Set</p>
    <p>${forcast.astro.sunset}</p>
  </div>
  <div id="essential-detail" class="max-temp">
  <p>Max Temp</p>
  <p>${Math.round(forcast.day.maxtemp_c)}&deg C</p>
</div>

<div id="essential-detail" class="min-temp">
  <p>Min Temp</p>
  <p>${Math.round(forcast.day.mintemp_c)}&deg C</p>
</div>`;
  displayEssentialDetails.innerHTML = result;
};

const setDisplayAreaAlert = (alert) => {
  let result = ``;
  if (alert == undefined) {
    result = `<p>No Alert For Today<p>`;
  } else {
    result = `<h1>
      ${alert.event}
    </h1>`;
  }

  displayAreaAlert.innerHTML = result;
};
export {
  setCityName,
  setCurrentWeather,
  setEssentialDetail,
  setDisplayAreaAlert,
};
