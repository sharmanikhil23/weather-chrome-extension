import { settingData, setData } from "../index.js";

let sync = document.getElementById("icon");
sync.addEventListener("click", () => {
  settingData((error, result) => {
    setData(result);
  });
});
