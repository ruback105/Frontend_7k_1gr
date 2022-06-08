// // TODO app (dienas planotaju)
// // Nokopejiet šo mapi savas majas darba mape
// // Aplikacijas darbas principi var apskatit video appDemo.mp4

// /* Mums nepieciešams izviedot nelielu todo aplikaciju ar iespeju pievienot izdzest un atziment izdarito notikumu
//     Mums nepieciešams 4 funkcijas
//         addTask() - pievienot notikumu
//             1 - izveleties inputa vertibu izmantojot selector.value;
//             2 - izveido object priekš notikums 
//                 const task = {
//                     textTask,
//                     done: false
//                 }
//             3 - izsaukt funkciju saveToLocalStorage

//         saveToLocalStorage() - saglaba notikumu
//             1 - jaizmanto JSON.stringify
//             2 - jaizmanto atslegst vards 'taskList'

//         renderTask() - izvada sarakstu notikumu
//             1 - jaizmanto innerHTML
//             2 - jaizmanto vienu no cikliem lai iziet cauri visam localstorage ierakstiem
//             3 - šis html palidzes izvadit datus
//             return `<li data-index='${i}'>
//                         <div class="">
//                             ${data.textTask}<span class="remove">❌</span>
//                         </div>
//                     </li>`;
//             4 - Gadijuma ja elements ir apziments ka izdarits mums nepiecišams pievienot klassi .done ../style.css
//                 Lidz ar to nepieciešams izveidot parbaudi if else lai parbaudit test.done === 'true'

//         toggleDone() - atzimet ka izdarito
//             Mums nepiecišams pievinot 2 eventListener
//                 addEventListener('submit', addTask);   ----> nostradas kad mes nospiedam pievinot pogu un izsaucam funkciju addTask
//                 addEventListener('click', toggleDone); ----> nostradas kad mes nospiedam uz elementu saraksta un izsaucam funkciju toggleDone

//                 funkcija toogleDone dara divas darbibas
//                 gadijuma ja bija nospiesta izdžešanas poga, mes izdesam elementu no localStorage izsaucam renderTask funkciju lai atjaunto sarakstu
//                 gadijuma ja bija nospiest elements mes nomainam elementam done vertibu done: false --> done: true un izsaucam renderTask funkciju lai atjauno sarakstu
// */
// // selected elements
// const taskListElement = document.getElementById("task-list");
// const addButton = document.getElementById("add-button");
// const inputField = document.getElementById("input");

// const taskList = JSON.parse(localStorage.getItem("task_list")) || []; // get data from local storage or create empty array

// /*
//   Function, that sets value inside local storage
//   key if the name, which will be assigned to the value inside the local storage, so you can get it by this name
//   value should be stringified before push, because we might want to store object type (array/object)
// */
// const saveToLocalStorage = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

// /*
//   Function, that renders list
//   It should render item value itself
//   In case if task is done, class should be rendered
//   TODO: you can add data-index='${idx}' to each li element, to use querySelector for selecting specific element by it index.
// */
// const renderTask = () => {
//   const taskListElementArray = taskList.map(
//     (task, idx) => `<li class="${task.done ? "done" : null}">${task.value}</li>`
//   );
//   taskListElement.innerHTML = taskListElementArray.join("");
// };

// /*
//   Function that removed element from list or toggle done. 
//   If you wan't to use, as it is specified in descripton, you need to refactor current code and add done state here
// */
// const toggleDone = (e) => {};

// // triggers, when add button is clicked
// addButton.addEventListener("click", (e) => {
//   e.preventDefault(); // prevent default behaviour of submit buttons (page refresh)

//   const inputValue = inputField.value; // get input value from the field

//   taskList.push({ value: inputValue, done: false }); // push new input value inside task list
//   saveToLocalStorage("task_list", taskList); // save new task list inside the local storage

//   inputField.value = ""; // reset input field value

//   renderTask(); // re-render html list
// });

// // triggers when something inside of the list is clicked
// taskListElement.addEventListener("click", (e) => {
//   const clickedLiIndex = Array.from(taskListElement.children).indexOf(e.target); // get li index, that was clicked

//   taskList[clickedLiIndex].done = !taskList[clickedLiIndex].done; // set reverse state value to task list item, that was clicked

//   saveToLocalStorage("task_list", taskList); // save new list inside the local storage

//   renderTask(); // re-render html list
// });

// renderTask(); // initial htmt list render