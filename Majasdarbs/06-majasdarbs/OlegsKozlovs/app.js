const characters = ["a", "b", "c", "d", "e", "g", "k", "m", "o", "q", "t", "z"];

let arrayId;

let output = document.getElementById("main");

const printValues = () => { output.innerText = characters[arrayId]};

const getValue = () => {
    arrayId = prompt("Please provide character index:");
    if (!isNaN(arrayId)) {
        if (arrayId >= 0 && arrayId <= characters.length - 1) {
            printValues();
            return;
        }
    }
    alert("Invalid index has been provided! Please try again.");
    getValue();
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