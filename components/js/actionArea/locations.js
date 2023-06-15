const settingNewLocationsInLocalStorage = () => {
  localStorage.setItem("locations", JSON.stringify(locations));
};

const gettingAllLocationsFromLocalStorage = () => {
  let temp = localStorage.getItem("locations");
  if (!temp) {
    return null;
  } else {
    return JSON.parse(temp);
  }
};

let locations = gettingAllLocationsFromLocalStorage();

export const printingAllLocations = () => {
  locations = gettingAllLocationsFromLocalStorage();

  if (!locations) {
    document.getElementById("locationAddedTillNow").style.display = "none";
    return;
  }

  document.getElementById("locationAddedTillNow").style.display = "block";

  const locationArea = document.getElementById("locationAddedTillNow");

  let data = "";
  locations.forEach((element) => {
    data += `<div class="locationsAdded">
             <div>${element}</div>
             <input type="checkbox" id=${element} name=${element} value=${false} class="checkbox" >
             <span class="material-symbols-outlined icon iconLocations" id="icon-close">
                close
             </span>
            </div>`;
  });
  locationArea.innerHTML = data;

  let closeButtons = document.getElementsByClassName("iconLocations");
  Array.from(closeButtons).forEach((element, index) => {
    element.addEventListener("click", () => removingLocationFromList(index));
  });

  let checkbox = document.getElementsByClassName("checkbox");
  Array.from(checkbox).forEach((element, index) => {
    element.addEventListener("click", () => selectingLocation(index));
  });
};

const removingLocationFromList = (i) => {
  locations = locations.filter((element, index) => {
    if (index != i) {
      return element;
    }
  });
  settingNewLocationsInLocalStorage();
  printingAllLocations();
};

export const addingNewLocation = (newLoc) => {
  locations = gettingAllLocationsFromLocalStorage();
  if (locations) {
    let similar = false;
    locations.forEach((element) => {
      if (element.toLowerCase() === newLoc.toLowerCase()) {
        similar = true;
        return;
      }
    });
    if (similar) {
      return;
    }
    locations.push(newLoc);
    settingNewLocationsInLocalStorage();
    printingAllLocations();
  } else {
    locations = [];
    locations.push(newLoc);
    settingNewLocationsInLocalStorage();
    printingAllLocations();
  }
};

const selectingLocation = (i) => {
  let checkbox = document.getElementsByClassName("checkbox");
  let formInput = document.getElementById("location");
  Array.from(checkbox).forEach((element, index) => {
    if (index == i && element.checked == true) {
      formInput.value = locations[i];
    } else if (element.checked == true) {
      element.checked = false;
      console.log("called");
    }
  });
};
