// Selectors
const displayElement = document.getElementsByTagName("input")[0];
const allButtonElements = document.getElementsByTagName("button");

// Global variables
let memoryValue = 0;

// Functions
const calculate = (operand1, operand2, action) => {
  try {
    if (action === "+") {
      return (parseFloat(operand1) + parseFloat(operand2)).toFixed(20);
    }
    if (action === "-") {
      return (parseFloat(operand1) - parseFloat(operand2)).toFixed(20);
    }
    if (action === "*") {
      return (parseFloat(operand1) * parseFloat(operand2)).toFixed(20);
    }
    if (action === "/") {
      return (parseFloat(operand1) / parseFloat(operand2)).toFixed(20);
    }
  } catch (error) {
    alert("Error detected during calculation!");
  }
};
const getValue = (e) => {
    return (e.pointerType === "mouse") ? value = e.target.value : value = e.key;
}
const getEventType = (e) => {
  if (e === null) {
    return "";
  }
  const value = getValue(e);
  if (/^\d+$/.test(value)) {
    return "digit";
  }
  if (value.startsWith("mem")) {
    return "memory";
  }
  if (value === "invert") {
    return "invertion";
  }
  if (value === "point") {
    return "point";
  }
  if (value === "back" || value === "Backspace"|| e.keyCode == 8) {
    return "back";
  }
  if (value === "clear" || e.keyCode == 46) {
    return "clear";
  }
  if (value === "equals" || value === "=") {
    return "equals";
  }
  return "action";
};
const appendDigit = (e) => {
  displayElement.value === "0"
    ? (displayElement.value = getValue(e))
    : (displayElement.value += getValue(e));
};
const invertValue = () => {
  if (displayElement.value !== "0") {
    displayElement.value = displayElement.value * -1;
  }
};
const addDecimalPoint = () => {
  if (displayElement.value.includes(".")) {
    return;
  }
  displayElement.value += ".";
};
const removeLastCharacter = () => {
  if (displayElement.value !== "0") {
    let str = displayElement.value;
    displayElement.value = str.slice(0, -1);
  }
};
const memoryActions = (e) => {
  switch (getValue(e)) {
    case "memstore":
      memoryValue = displayElement.value;
      break;
    case "memplus":
      memoryValue = calculate(memoryValue, displayElement.value, "+");
      break;
    case "memminus":
      memoryValue = calculate(memoryValue, displayElement.value, "-");
      break;
    case "memdisplay":
      alert(`Value in memory is: ${memoryValue}`);
      break;
    case "memclear":
      memoryValue = 0;
      break;
    default:
  }
};
const eventsHandler = (e) => {
  switch (getEventType(e)) {
    case "digit":
      appendDigit(e);
      break;
    case "memory":
      memoryActions(e);
      break;
    case "invertion":
      invertValue();
      break;
    case "point":
      addDecimalPoint();
      break;
    case "back":
      removeLastCharacter();
      break;
    case "clear":
      displayElement.value = "0";
      break;
    case "equals":
      break;
    case "action":
      break;
    default:
  }
};

// Listeners
Array.from(allButtonElements).forEach((button) =>
  button.addEventListener("click", eventsHandler)
);
document.addEventListener("keypress", eventsHandler);
