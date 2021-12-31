let buttonEl = document.querySelector("#save-task");
let taskList = document.querySelector("#task-to-do");
let taskForm = document.querySelector("#task-form");

let createTaskHandler = function (event) {
    
    event.preventDefault();

    let newTask = document.createElement("li");
    newTask.classList.add("task-item");
    newTask.textContent = "Brand New Added Task";
    taskList.appendChild(newTask);
}

taskForm.addEventListener('submit', createTaskHandler);