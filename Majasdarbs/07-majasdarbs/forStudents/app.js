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

const renderTask = () => {
  const taskListElementArray = taskList.map(
    (task) => `<li class="${task.done ? "done" : null}">${task.value}</li>`
  );
  taskListElement.innerHTML = taskListElementArray.join("");
};

const toggleDone = (e) => {

};

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValue = inputField.value;

  taskList.push({ value: inputValue, done: false });
  saveToLocalStorage("task_list", taskList);

  inputField.value = "";

  renderTask();
});

taskListElement.addEventListener("click", (e) => {
  const clickedLiIndex = Array.from(taskListElement.children).indexOf(e.target);

  if (taskList[clickedLiIndex].done) {
    taskList[clickedLiIndex].done = false;
  } else {
    taskList[clickedLiIndex].done = true;
  }

  saveToLocalStorage("task_list", taskList);

  renderTask();
});

renderTask();
