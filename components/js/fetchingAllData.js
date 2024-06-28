const getData = (location, callback) => {
  let url = `https://weather-app-backend-2-0.onrender.com/?location=${encodeURIComponent(
    location
  )}`;

  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        return callback({ Error: "Error" }, undefined);
      }
      return response.json(); // Assuming the response is JSON
    })
    .then((data) => {
      data = data.data;

      let complete = {
        location: data.location,
        data: data,
        hour: new Date().getHours(),
        day: new Date().getDate(),
      };
      complete = JSON.stringify(complete);
      localStorage.setItem("weather-forcast-from-weather-app", complete);
      complete = JSON.parse(complete);
      console.log(complete);
      callback(undefined, complete);
    })
    .catch((error) => {
      callback("Error fetching data:", error);
    });
};

export default getData;
