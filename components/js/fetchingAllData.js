const getData = (location, callback) => {
  let url = `https://gleaming-lion-wetsuit.cyclic.app/?location=${location}`;
  fetch(url, {
    method: "GET",
    // mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
    .then((result) => {
      return result.text();
    })
    .then((data) => {
      data = JSON.parse(data);
      let complete = {
        location: data.location,
        data: data,
        hour: new Date().getHours(),
        day: new Date().getDate(),
      };

      complete = JSON.stringify(complete);

      localStorage.setItem("weather-forcast-from-weather-app", complete);
      complete = JSON.parse(complete);
      callback(undefined, complete);
    });
};

export default getData;
