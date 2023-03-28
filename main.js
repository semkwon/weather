const API_KEY = "7295991df2fd4f9eee443bf7f8af701d";
// https://api.openweathermap.org/data/2.5/weather?lat=37.2597&lon=127.008949&appid=7295991df2fd4f9eee443bf7f8af701d

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    console.log(url);
  },
  () => alert("Not allowed!")
);
