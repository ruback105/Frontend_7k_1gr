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
// console.log(boolean(arrayId));
// console.log(arrayId.length);
let output = document.getElementById("main");
function printValue() {
  output.innerHTML = letters[arrayId];
}
// arrayId == null
function getValue() {     
          if (arrayId >= 0 && arrayId <= 25 && arrayId) {
    printValue();
  } 
//   else if (arrayId == null || arrayId.length == 0) {
//           alert("Enter valid value");
   else {
          alert("Enter valid value");
  }};
getValue() /
  document.addEventListener("keypress", function onEvent(event) {
    if (event.key === letters[arrayId]) {
      alert("PAREIZI");
      getValue();
    } else {
      alert("NEPAREIZI");
    }
  });
