import { printingAllLocations } from "./locations.js";

const closeButton = document.getElementById("icon-close");

closeButton.addEventListener("click", () => {
  let form = document.getElementById("form-area");
  printingAllLocations();
  form.style.display = "flex";
});
