let buttonEl = document.querySelector("#save-task");
let taskList = document.querySelector("#task-to-do");
let taskForm = document.querySelector("#task-form");


let taskFormHandler = function (event) {
    event.preventDefault();

    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;

    if(!taskNameInput || !taskTypeInput){
        alert("A task cannot be created if you don't input data");
        return false;
    }

    taskForm.reset();

    let taskData = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskData);


}

let createTaskEl = function(dataObj){
    let newTask = document.createElement("li");
    newTask.classList.add("task-item");

    let taskInfo = document.createElement("div");

    taskInfo.classList.add("task-info");
    taskInfo.innerHTML = "<h3 class='task-name'>"+dataObj.name+"</h3><span class='task-type'>"+dataObj.type+"</span>";
    newTask.appendChild(taskInfo);
    taskList.appendChild(newTask);
}

taskForm.addEventListener('submit', taskFormHandler);