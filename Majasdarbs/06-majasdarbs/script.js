const characters = ["a", "b", "c", "d", "e"];

let arrayId;
let promptMessage;

let output = document.getElementById("main");

const printValues = (elem) => {
  elem.innerText = characters[arrayId];
};

const getValue = (message = null) => {
  arrayId = prompt(
    message ?? `Ievadiet skaitli no 0 līdz ${characters.length - 1}:`
  );
  if (arrayId >= 0 && arrayId <= characters.length - 1 && !isNaN(arrayId)) {
    printValues(output);
    return;
  }
  promptMessage = `Skaitlis ${arrayId} netbilst intervālam no 0 līdz ${
    characters.length - 1
  }:`;
  getValue(promptMessage);
};

getValue();

document.addEventListener("keypress", (e) => {
  if (e.key === arrayId) {
    alert("Pareizi!");
    getValue();
  } else {
    alert("Nepareizi!");
  }
});