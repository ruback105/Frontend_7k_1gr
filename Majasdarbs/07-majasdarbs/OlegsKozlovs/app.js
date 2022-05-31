// TODO app (dienas planotaju)
// Nokopejiet šo mapi savas majas darba mape
// Aplikacijas darbas principi var apskatit video appDemo.mp4

/* Mums nepieciešams izviedot nelielu todo aplikaciju ar iespeju pievienot izdzest un atziment izdarito notikumu
    Mums nepieciešams 4 funkcijas
        addTask() - pievienot notikumu
            1 - izveleties inputa vertibu izmantojot selector.value;
            2 - izveido object priekš notikums 
                const task = {
                    textTask,
                    done: false
                }
            3 - izsaukt funkciju saveToLocalStorage

        saveToLocalStorage() - saglaba notikumu
            1 - jaizmanto JSON.stringify
            2 - jaizmanto atslegst vards 'taskList'

        renderTask() - izvada sarakstu notikumu
            1 - jaizmanto innerHTML
            2 - jaizmanto vienu no cikliem lai iziet cauri visam localstorage ierakstiem
            3 - šis html palidzes izvadit datus
            return `<li data-index='${i}'>
                        <div class="">
                            ${data.textTask}<span class="remove">❌</span>
                        </div>
                    </li>`;
            4 - Gadijuma ja elements ir apziments ka izdarits mums nepiecišams pievienot klassi .done ../style.css
                Lidz ar to nepieciešams izveidot parbaudi if else lai parbaudit test.done === 'true'

        toggleDone() - atzimet ka izdarito
            Mums nepiecišams pievinot 2 eventListener
                addEventListener('submit', addTask);   ----> nostradas kad mes nospiedam pievinot pogu un izsaucam funkciju addTask
                addEventListener('click', toggleDone); ----> nostradas kad mes nospiedam uz elementu saraksta un izsaucam funkciju toggleDone

                funkcija toogleDone dara divas darbibas
                gadijuma ja bija nospiesta izdžešanas poga, mes izdesam elementu no localStorage izsaucam renderTask funkciju lai atjaunto sarakstu
                gadijuma ja bija nospiest elements mes nomainam elementam done vertibu done: false --> done: true un izsaucam renderTask funkciju lai atjauno sarakstu
*/
// addEventListener click
// addEventListener submit

const taskListElement = document.getElementById("task-list");
const addButton = document.getElementById("add-button");
const inputField = document.getElementById("input");

const taskList = JSON.parse(localStorage.getItem("task_list")) || [];

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const isInTaskList = (elem) => {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].value === elem) {
      return true;
    }
  }
  return false;
}

const isValidInput = (input) => {
  // Below block is actual if field is not with attribute "required" in HTML
  // if (input === null || input.length === 0) {
  //   alert("Task name can not be empty!");
  //   return false;
  // }
  if (isInTaskList(input)) {
    alert("Task already exists!");
    return false;
  }
  return true;
};

const renderTask = () => {
  let counter = 0;
  const taskListElementArray = taskList.map(
    (task) =>
      `<li data-id="${counter++}" class="${task.done ? "done" : null}">${
        task.value
      }<span class="remove">❌</span></li>`
  );
  taskListElement.innerHTML = taskListElementArray.join("");
};

const addTask = (e) => {
  if (!inputField.validity.valid) {
    // Stop code execution if HTML "required" validation failed
    return;
  }
  e.preventDefault();
  if (!isValidInput(inputField.value.trim())) {
    return;
  }
  const inputValue = inputField.value.trim();
  taskList.push({ value: inputValue, done: false });
  saveToLocalStorage("task_list", taskList);
  inputField.value = "";
  renderTask();
};

const toggleDone = (e) => {
  if (e === null) {
    return;
  }
  let clickedLiIndex;
  if (e.srcElement.localName === "li") {
    // Complete done toggle
    // clickedLiIndex = Array.from(taskListElement.children).indexOf(e.target); // another way to get index if "data-id" attribute doesn't exist
    clickedLiIndex = e.target.getAttribute("data-id");
    taskList[clickedLiIndex].done = !taskList[clickedLiIndex].done;
  } else {
    // Complete task removing
    // clickedLiIndex = Array.from(taskListElement.children).indexOf(e.target.parentElement); // another way to get index if "data-id" attribute doesn't exist
    clickedLiIndex = e.target.parentElement.getAttribute("data-id");
    taskList.splice(clickedLiIndex, 1);
  }
  saveToLocalStorage("task_list", taskList);
  renderTask();
};

// Listeners
addButton.addEventListener("click", addTask);
taskListElement.addEventListener("click", toggleDone);

renderTask();
