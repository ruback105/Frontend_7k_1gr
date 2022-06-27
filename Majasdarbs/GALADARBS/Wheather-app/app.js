const button = document.querySelector("#search-button");
const btnInput = document.querySelector("input");
const cityDisplay = document.querySelector("#city");
const degreeDisplay = document.querySelector("#temperature");
const descriptionDisplay = document.querySelector("#current-desc");
const windSpeedDisplay = document.querySelector("#wind-speed");
const humidityDisplay = document.querySelector("#humidity");
const uvIndexDisplay = document.querySelector("#uv-index");

const weatherUpdate = async (city) => {
  await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b1b3058f89f04f588d6192908222606&q=${city}&aqi=no`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      cityDisplay.innerHTML = data.location.name;
      degreeDisplay.innerHTML = data.current.temp_c + "°C";
      descriptionDisplay.innerHTML = data.current.condition.text;
      document.querySelector("#icon").src =
        "https:" + data.current.condition.icon;
      humidityDisplay.innerHTML = "Humidity: " + data.current.humidity + "%";
      windSpeedDisplay.innerHTML =
        "Wind speed: " + data.current.wind_kph + " km/h";
      uvIndexDisplay.innerHTML = "UV index: " + data.current.uv;
      return (falseSearch = false);
    })
    .catch(() => {
      alert("City does not exist.");
      return (falseSearch = true);
    });
};

weatherUpdate("Riga");

// event listeners
button.addEventListener("click", async () => {
  await weatherUpdate(btnInput.value);
  if (falseSearch === true) {
    return;
  } else {
    backgroundImgUpdate(btnInput.value);
  }
});
window.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    await weatherUpdate(btnInput.value);
    if (falseSearch === true) {
      return;
    } else {
      backgroundImgUpdate(btnInput.value);
    }
  }
});

const backgroundImgUpdate = async (cityName) => {
  const res = await fetch(`https://source.unsplash.com/1600x900/?${cityName} `);
  document.body.style.background = `url(${res.url}) no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
};
