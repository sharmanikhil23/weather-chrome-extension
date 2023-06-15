import getData from "../fetchingAllData.js";

import { printingAllLocations, addingNewLocation } from "./locations.js";

import { setData } from "../index.js";
import { setCurrentForcast } from "../current/currentForcast.js";

let weatherForm = document.getElementById("form");
let weatherFormButton = document.getElementById("weather-form-button");
let form = document.getElementById("form-area");

const data = (e) => {
  let location = document.getElementById("location");
  location = location.value;

  let loading = document.getElementById("loader");
  form.style.display = "none";
  loading.style.display = "flex";
  getData(location, (error, data) => {
    if (error) {
      loading.style.display = "none";
      form.style.display = "flex";
    } else {
      setData(data);
      addingNewLocation(location);
      loading.style.display = "none";
    }
    location = document.getElementById("location");
    location.value = "";
  });
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  data(e);
});

weatherFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  data(e);
});
