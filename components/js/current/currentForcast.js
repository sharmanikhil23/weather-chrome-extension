let currentForcast = document.getElementById("all-weather-information-current");
let allCurrentForcast = [];

export const setCurrentForcast = (data) => {
  let currentTime = new Date().toTimeString().slice(0, 2);

  allCurrentForcast = data.forecastday[0].hour.filter((current) => {
    if (current.time.slice(11, 16).localeCompare(currentTime) >= 0) {
      return current;
    }
  });

  if (allCurrentForcast.length < 24) {
    let size = 23 - allCurrentForcast.length;
    for (let i = 0; i < size; i++) {
      allCurrentForcast.push(data.forecastday[1].hour[i]);
    }
  }

  let result = "";
  for (let i = 0; i < allCurrentForcast.length; i++) {
    result =
      result +
      currentForcastTemplate({
        time: allCurrentForcast[i].time.slice(11, 16),
        icon: `https:` + allCurrentForcast[i].condition.icon,
        temprature: allCurrentForcast[i].temp_c,
        precip: Math.max(
          allCurrentForcast[i].chance_of_rain,
          allCurrentForcast[i].chance_of_snow
        ),
      });
  }

  currentForcast.innerHTML = result;
};

const currentForcastTemplate = ({ time, icon, temprature, precip }) => {
  return `
    <div class="weather-forcast">
      <h3 id="forcecast-time">${time}</h3>
      <img src=${icon}></img>
      <h3 id="forcecast-temp">${Math.round(temprature)}&deg</h3>
      <h3 id="forcecast-prec">${precip}%</h3>
    </div>`;
};
