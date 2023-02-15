let futureForcastArea = document.getElementById("all-weather-forcast");

export const setFutureForcast = ({ forecastday }) => {
  let data = [];

  let today = new Date().getDay();
  for (let i = 1; i <= 2; i++) {
    let temp = {
      day: getDay(today, i),
      icon: `https:` + forecastday[i].day.condition.icon,
      temp: `${forecastday[i].day.maxtemp_c}&deg / ${forecastday[i].day.mintemp_c}&deg`,
      chances: Math.max(
        forecastday[i].day.daily_chance_of_rain,
        forecastday[i].day.daily_chance_of_snow
      ),
      data: forecastday[i],
    };

    data.push(temp);
  }

  futureForcastTemplate(data);
};

const futureForcastTemplate = (data) => {
  let result = ``;
  for (let i = 0; i < data.length; i++) {
    result += `<div>
      <h3 id="forcecast-day">${data[i].day}</h3>
      <img src=${data[i].icon}></img>
      <h3 id="forcecast-temp">${data[i].temp}</h3>
      <h3 id="forcecast-prec">${data[i].chances}%</h3>
    </div>`;
  }
  futureForcastArea.innerHTML = result;
};

const getDay = (today, i) => {
  if (today + i > 6) {
    return days[i];
  } else {
    return days[today + i];
  }
};
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
