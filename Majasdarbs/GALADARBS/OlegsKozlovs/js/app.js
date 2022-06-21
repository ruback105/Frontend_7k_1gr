// Selectors
const displayElement = document.getElementsByTagName("input")[0];
const allButtonElements = document.getElementsByTagName("button");
const historyRecordsElement = document.getElementById("historyRecords");
const historyButtonElement = document.querySelector("button[value='histdisplay']");

// Global variables
let showHist = true;

// Class instances
const operation = new Operation();
const memory = new Memory();

// Functions
const isHistoryShown = () => {
  const historyHeaderElement = document.getElementsByTagName("h3");
  if (historyHeaderElement && historyHeaderElement.length > 0) {
    return true;
  }
  return false;
}
const renderHistory = () => {
  const eventsList =
    JSON.parse(localStorage.getItem("calculator_history")) || [];
  historyRecordsElement.innerHTML = "<h3>History:</h3>";
  if (eventsList.length === 0) {
    const record = document.createElement("paragraph");
    record.innerHTML = "No records to diplay";
    historyRecordsElement.appendChild(record);
  }
  eventsList.reverse().forEach((event) => {
    const record = document.createElement("paragraph");
    record.innerHTML = `${event}<br>`;
    historyRecordsElement.appendChild(record);
  });  
}
const showHistory = () => {
  if (!showHist) {
    historyRecordsElement.innerHTML = "";
    showHist = true;
    historyButtonElement.setAttribute("title", "Show history");
    return;
  }
  renderHistory();
  showHist = false;
  historyButtonElement.setAttribute("title", "Hide history");
};
const writeHistory = () => {
  if (!operation) {
    return;
  }
  const eventsList =
    JSON.parse(localStorage.getItem("calculator_history")) || [];
  eventsList.push(
    `${operation.operand1} ${operation.action} ${operation.operand2} = ${displayElement.value}`
  );
  localStorage.setItem("calculator_history", JSON.stringify(eventsList));
  if (isHistoryShown()) {
    renderHistory();
  }
};
const clearHistory = () => {
  localStorage.removeItem("calculator_history");
  if (isHistoryShown()) {
    renderHistory();
  }
};
const getValue = (e) => {
  return e.pointerType === "mouse" ? (value = e.target.value) : (value = e.key);
};
const getEventType = (e) => {
  if (e === null) {
    return "";
  }
  const value = getValue(e);
  if (/^\d+$/.test(value)) {
    return "digit";
  }
  if (e.pointerType === "mouse") {
    if (value.startsWith("mem")) {
      return "memory";
    }
    if (value.startsWith("hist")) {
      return "history";
    }
    if (value === "invert") {
      return "invertion";
    }
  }
  if (value === "point" || value === ".") {
    return "point";
  }
  if (value === "back" || e.keyCode == 8) {
    return "back";
  }
  if (value === "clear" || e.keyCode == 46) {
    return "clear";
  }
  if (value === "equals" || value === "=" || value === "Enter") {
    return "equals";
  }
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    return "action";
  }
  return "";
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
  if (!displayElement.value) {
    displayElement.value = "0";
  }
};
const memoryActions = (e) => {
  if (!memory) {
    return;
  }
  switch (getValue(e)) {
    case "memstore":
      memory.setMemoryValue(displayElement.value);
      break;
    case "memplus":
      memory.addToMemoryValue(displayElement.value);
      break;
    case "memminus":
      memory.subtractFromMemoryValue(displayElement.value);
      break;
    case "memdisplay":
      memory.displayMemoryValue();
      break;
    case "memclear":
      memory.init();
      break;
    default:
  }
};
const eventsHandler = (e) => {
  if (!operation) {
    return;
  }
  switch (getEventType(e)) {
    case "digit":
      if (operation.getIsNewNumber()) {
        displayElement.value = "0";
      }
      appendDigit(e);
      operation.setIsNewNumber(false);
      break;
    case "memory":
      memoryActions(e);
      break;
    case "history":
      getValue(e) === "histdisplay" ? showHistory() : clearHistory();
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
      operation.init();
      break;
    case "action":
      operation.setIsNewNumber(true);
      if (operation.getAction()) {
        operation.setOperand2(displayElement.value);
        displayElement.value = operation.calculate();
        writeHistory();
      }
      operation.setOperand1(displayElement.value);
      operation.setAction(getValue(e));
      operation.setActionOnEquals("");
      break;
    case "equals":
      if (operation.getActionOnEquals()) {
        operation.setAction(operation.getActionOnEquals());
      }
      if (operation.getAction()) {
        if (!operation.getActionOnEquals()) {
          operation.setOperand2(displayElement.value);
        }
        displayElement.value = operation.calculate();
        writeHistory();
        operation.setOperand1(displayElement.value);
        operation.setActionOnEquals(operation.getAction());
        operation.setAction("");
      }
      break;
    default:
  }
};

// Listeners
Array.from(allButtonElements).forEach((button) =>
  button.addEventListener("click", eventsHandler)
);
document.addEventListener("keydown", eventsHandler);
