const API_KEY = "7295991df2fd4f9eee443bf7f8af701d";
// https://api.openweathermap.org/data/2.5/weather?lat=37.2597&lon=127.008949&appid=7295991df2fd4f9eee443bf7f8af701d

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weatherTemp.innerText =
          data.name + "," + parseInt(data.main.temp) + "℃";

        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });
  },
  () => alert("Not allowed!")
);
