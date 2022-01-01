let buttonEl = document.querySelector("#save-task");
let taskList = document.querySelector("#task-to-do");
let taskForm = document.querySelector("#task-form");
let taskNameInput = document.querySelector("input[name='task-name']");
let taskTypeInput = document.querySelector("select[name='task-type']");

let createTaskHandler = function (event) {
    console.log(taskNameInput);
    event.preventDefault();

    let newTask = document.createElement("li");
    newTask.classList.add("task-item");

    let taskInfo = document.createElement("div");

    taskInfo.classList.add("task-info");
    taskInfo.innerHTML = "<h3 class='task-name'>"+taskNameInput.value+"</h3><span class='task-type'>"+taskTypeInput.value+"</span>";
    newTask.appendChild(taskInfo);
    taskList.appendChild(newTask);
    //taskNameInput.value = "";
}

taskForm.addEventListener('submit', createTaskHandler);