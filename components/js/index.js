import {
  setCityName,
  setCurrentWeather,
  setEssentialDetail,
  setDisplayAreaAlert,
} from "./current/weather.js";

import { setFutureForcast } from "./forcast/futureForcast.js";

import { setCurrentForcast } from "./current/currentForcast.js";

import getData from "./fetchingAllData.js";

let body = document.getElementsByTagName("body");

let allData;
let loading = document.getElementById("loader");

loading.style.display = "flex";

async function work(e) {
  let data = localStorage.getItem("weather-forcast-from-weather-app");

  data = JSON.parse(data);

  if (data == undefined || data == null) {
    let form = document.getElementById("form-area");
    loading.style.display = "none";
    form.style.display = "flex";
  } else {
    let now = new Date();
    if (data.day != now.getDate()) {
      settingData((error, data) => {
        allData = data;
        setData(data);
      });
    } else if (now.getHours() - data.hour >= 1) {
      settingData((error, data) => {
        allData = data;
        setData(data);
      });
    } else {
      allData = data;
      setData(allData);
    }
  }
}

if (document.readyState == "interactive") {
  document.addEventListener("DOMContentLoaded", work);
}

export function setData(allData) {
  setCityName(allData.location);
  setCurrentWeather(allData.data.current);
  setEssentialDetail(allData.data.current, allData.data.forecast);
  setCurrentForcast(allData.data.forecast);
  setDisplayAreaAlert(allData.data.alerts.alert[0]);
  setFutureForcast(allData.data.forecast);
  loading.style.display = "none";
}

export function settingData(callback) {
  let data = localStorage.getItem("weather-forcast-from-weather-app");
  data = JSON.parse(data);
  getData(data.location.name + " " + data.location.region, (error, result) => {
    if (error) {
    } else {
      callback(undefined, result);
    }
  });
}
