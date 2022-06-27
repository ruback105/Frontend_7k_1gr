//const userInput = document.getElementById("cityinput").value;
//const userInput = document.querySelector("#cityinput");

const userInput = "Riga";
const KELVIN = 273;
//const key = process.env.API_KEY;
const key = "3045dd712ffe6e702e3245525ac7fa38";

function getInputFromTextBox() {
  let input = document.getElementById("cityinput").value;
  console.log(input);
}
//Get weather from API provider
async function start() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${key}`
    );
    const data = await response.json();
    weather.iconId = data.weather[0].icon;
    console.log(data);
    renderData(data);
  } catch (e) {
    console.log("There was a problem fetching data.");
  }
}
start();

let now = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

function renderData(data) {
  //const input = document.getElementById("cityinput").value;
  document.getElementById("weather").innerHTML = `

  <p class="sm:text-2xl text-xl"><i class="fa-solid fa-location-dot">&ensp;</i>${
    data.name
  }</p>
  <img class="sm:w-56 w-40" src='icons/${weather.iconId}.png' /> 
  <p class="sm:text-6xl text-4xl">${Math.round(data.main.temp - KELVIN)}°C</p>
  <p class="text-2xl">${data.weather[0].description}</p>
  <p>${now}</p>
  <img class="w-full" src="img/clouds.png" />
  `;
}
