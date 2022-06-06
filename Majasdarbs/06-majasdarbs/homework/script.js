
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','o','w','o','w','x','y','z'];

let arrayId = prompt(`Enter number from 0 to 25`);
let output = document.getElementById("main");
function printValue() {
  output.innerHTML = letters[arrayId];
}
function getValue() {     
          if (arrayId >= 0 && arrayId <= 25 && arrayId) {
    printValue();
  } 
   else {
          alert("Enter valid value, number from 0 to 25");
  }};
getValue()
  document.addEventListener("keypress", function onEvent(event) {
    if (event.key === letters[arrayId]) {
      alert("RIGHT");
      getValue();
    } else {
      alert("WRONG");
    }
  });