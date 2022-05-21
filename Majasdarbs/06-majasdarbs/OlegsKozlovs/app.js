const characters = ["a", "b", "c", "d", "e", "g", "k", "m", "o", "q", "t", "z"];

let arrayId;
let promptMessage;

let output = document.getElementById("main");

const printValues = (elem) => { elem.innerText = characters[arrayId]};

const getValue = (message = null) => {
    arrayId = prompt(message ?? `Please provide character index from 0 till ${characters.length - 1}:`);
    if(arrayId >= 0 && arrayId <= characters.length - 1 && !isNaN(arrayId)) {
        printValues(output);
        return;
    }
    promptMessage = `Invalid index has been provided! Please try again from 0 till ${characters.length - 1}:`;
    getValue(promptMessage);
}

getValue();

document.addEventListener("keypress", (e) => {
    if (e.key === output.innerText) {
        alert("PAREIZI");
        getValue();
    } else {
        alert("NEPAREIZI");
    }
}); 