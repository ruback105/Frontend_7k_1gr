const characters = ["a", "b", "c", "d", "a", "c", "r", "h", "r", "t" ];

let arrayId;

const output = document.getElementById("main");

  
const getValue = () =>  {
  arrayId = prompt('Enter number from 0 to ${characters.lenght - 1}');

  if (arrayId >= 0 && arrayId <= characters.lenght - 1) {
    printValues();
  } else {
    getValue();
  }
};

const printValues = () => {
    output.innerText = characters[arrayId];
};

getValue();

window.addEventListener ("keypress", (e) => {
if (e.key === characters[arrayId]) {
  alert("PAREIZI!");
  getValue();
 } else {
  alert('NEPAREIZI');
 }
});