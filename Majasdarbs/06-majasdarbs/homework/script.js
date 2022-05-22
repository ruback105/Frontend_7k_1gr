const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let arrayId = prompt("Please enter your number");
let output = document.getElementById("main");
function printValue() {
  output.innerHTML = letters[arrayId];
}
function getValue() {
  if (arrayId >= 0 && arrayId <= 25) {
    printValue();
  } else {
    alert("NEPAREIZI");
  }
}
getValue() /
  document.addEventListener("keypress", function onEvent(event) {
    if (event.key === letters[arrayId]) {
      alert("PAREIZI");
      getValue();
    } else {
      alert("NEPAREIZI");
    }
  });
