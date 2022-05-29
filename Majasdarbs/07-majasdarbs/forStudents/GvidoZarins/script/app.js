// Selected elements
const input = document.getElementById("input");
const addButton = document.getElementById("add-button");
const taskElement = document.getElementById("task-list");

// Get data or create an empty array
const taskList = JSON.parse(localStorage.getItem("task_list")) || [];

// Save to local storage 
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

// Render list array
const renderList = () => {
    let counter = 0;
    const taskElementArray = taskList.map(
        (task) => 
        `<li data-id="${counter++}" class="${task.done ? "done" : null}">${task.value}<span class="remove">❌</span></li>`
    );
    taskElement.innerHTML = taskElementArray.join("");
};


// Adds element to list "task-list" and saves to array
  addButton.addEventListener("click", (e) => {
      e.preventDefault();

      const inputValue = input.value;

      if (inputValue !== ""){
        taskList.push({value: inputValue});
        saveToLocalStorage("task_list", taskList);
      } else {
        alert("We dont accept empty task field!");
      }

      input.value = "";
      renderList();
  })

// Toggle done and remove
const toggleDone = (e) => {

  let clickedLiIndex = Array.from(taskElement.children).indexOf(e.target);


  if (e.srcElement.localName === "li") {
    
    taskList[clickedLiIndex].done = !taskList[clickedLiIndex].done; // set reverse state value to task list item, that was clicked
  
    saveToLocalStorage("task_list", taskList); // save new list inside the local storage
  
    renderList(); // re-render html list
  } else {
    clickedLiIndex = e.target.parentElement.getAttribute("data-id");
    taskList.splice(clickedLiIndex, 1);
  }
  saveToLocalStorage("task_list", taskList);
  renderList();
}

taskElement.addEventListener("click", toggleDone);

// Auto render
  renderList();