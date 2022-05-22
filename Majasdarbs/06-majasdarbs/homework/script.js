const characters = ["a", "b", "c", "d", "e"];

let arrayId;
let promptMessage;

let outputs = document.getElementById("output");

const printValues = (elem) => {
  elem.innerText = characters[arrayId];
};

const getValue = (message = null) => {
  arrayId = prompt(
    message ?? `Ievadiet skaitli no 0 līdz ${characters.length}:`
  );
  if (arrayId >= 0 && arrayId <= characters.length - 1 && !isNaN(arrayId)) {
    printValues(output);
    return;
  }
  promptMessage = `Skaitlis ${arrayId} netbilst ${characters.length}:`;
  getValue(promptMessage);
};

getValue();

document.addEventListener("keypress", (e) => {
  if (e.key === output.innerText) {
    alert("PAREIZI");
    getValue();
  } else {
    alert("NEPAREIZI");
  }
});
