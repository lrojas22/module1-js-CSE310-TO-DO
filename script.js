const { createElement } = require("react");

//Array to store task
let tasks = [];

//Get HTML elements

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//Add event listener to add button

addTaskBtn.addEventListener("click", addTask);

//Function to add task

function addtask() {
    const taskText = taskInput.value;

    //validate Input
    if (taskText == "") {
        Swal.fire({
            icon: 'error',
            title:'Oops...',
            text: 'Please enter a task!'
        });
        return;
    }
    //Create task object
    const task = {
        id : Date.now(),
        text : taskText,
        completed   : false
    }


    //Add task to array
    tasks.push(task);

    //Display Task
    displayTasks();

    //clear input
    taskInput.value = "";

    //succes message
    Swal.fire({
        icon: 'succes',
        title: 'Task added'
    })

    //function display task
    function displayTasks() {
        //clear current list
        taskList.innerHTML = "";

        //Loop trough tasks
        tasks.forEach(task =>{
            const li = createElement("li");
            li.textContent  = task.text;
            taskList.appendChild(li);
        })
        
    }
}
