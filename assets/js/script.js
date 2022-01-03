let buttonEl = document.querySelector("#save-task");
let taskList = document.querySelector("#task-to-do");
let taskForm = document.querySelector("#task-form");
let taskIdCounter = 0;



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
    newTask.setAttribute("data-task-id", taskIdCounter);

    let taskInfo = document.createElement("div");

    taskInfo.classList.add("task-info");
    taskInfo.innerHTML = "<h3 class='task-name'>"+dataObj.name+"</h3><span class='task-type'>"+dataObj.type+"</span>";
    newTask.appendChild(taskInfo);

    let taskActions = createTaskActions(taskIdCounter);
    newTask.appendChild(taskActions);

    taskList.appendChild(newTask);
    
    taskIdCounter++;
};

let createTaskActions = function(taskId){
    let actionContainer = document.createElement('div');
    actionContainer.classList.add('task-actions');

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn","edit-btn");
    editBtn.setAttribute("data-task-id", taskId);
    actionContainer.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn","delete-btn");
    deleteBtn.setAttribute("data-task-id", taskId);
    actionContainer.appendChild(deleteBtn);

    let statusSelect = document.createElement("select");
    statusSelect.classList.add("select-status");
    statusSelect.setAttribute("name", "status-change");
    statusSelect.setAttribute("data-task-id", taskId);

    actionContainer.appendChild(statusSelect);

    let statusChoices = ["To Do", "In Progress", "Completed"];

    for (let i = 0; i < statusChoices.length; i ++){
        let statusOption = document.createElement("option");
        statusOption.textContent = statusChoices[i];
        statusOption.setAttribute("value", statusChoices[i]);

        statusSelect.appendChild(statusOption);
    }

    return actionContainer;
};

taskForm.addEventListener('submit', taskFormHandler);