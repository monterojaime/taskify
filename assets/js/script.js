let buttonEl = document.querySelector("#save-task");
let taskList = document.querySelector("#task-to-do");

let createTaskHandler = function () {
    let newTask = document.createElement("li");
    newTask.classList.add("task-item");
    newTask.textContent = "Brand New Added Task";
    taskList.appendChild(newTask);
}

buttonEl.addEventListener('click', createTaskHandler);