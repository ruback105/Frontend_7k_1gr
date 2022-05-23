

// Implementacija
// 1) izvejdot massivu ar burtiem characters[]
const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// 2) izvejtot mainigo "arrayId" šis mainigas saņems lietotaja ievadito skaitli
let arrayId; // šei es neizmantošu prompt (method displays a dialog box that prompts the user for input)

let promptMessage;

let output = document.getElementById("main"); // getElementById() returns an Element object representing the element whose id property matches the specified string

const printValues = (elem) => {                // kāda starpība starp inneHTML un innerTEXT?
elem.innerText = characters[arrayId];
  };
  
  const getValue = (message = null) => {
    arrayId = prompt(
      message ?? `Ievadiet skaitli no 0 līdz 25:` // šeit laikam 25 vieta jāizmanto ${characters.length - 1}
    );
    if (arrayId >= 0 && arrayId <= characters.length - 1 && !isNaN(arrayId)) {
      printValues(output);
      return;
    }
    promptMessage = `Skaitlis neatbilst lūgtajam no 0 līdz 25:`;
    getValue(promptMessage);
  };
  
  const printValue = () => {output.innerText = characters[arrayId]};
  getValue();

document.addEventListener("keypress", (e) => {
    if (e.key === output.innerText) {
      alert("PAREIZI!");
      getValue();
    } else {
      alert("NEPAREIZI!");
    }
  });