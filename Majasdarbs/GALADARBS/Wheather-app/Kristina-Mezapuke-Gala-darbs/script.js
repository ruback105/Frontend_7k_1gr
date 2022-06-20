let weather = { 
    fetchWeather: function (city) {
        fetch(
            https://api.open-meteo.com/v1/forecast?latitude=55.6763&longitude=12.5681&hourly=temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m&current_weather=true
            )
    .then((response) => {
        if (!response.ok) {
            alert("Laika apstākļi nav atrasti.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Laika apstākļi" + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " m/s";
    document.querySelector(".weather").classList.remove("loading");
    },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Riga");