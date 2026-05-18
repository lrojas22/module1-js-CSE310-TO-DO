    console.log("JavaScript connected!");


    // Array to store tasks
    let tasks = [];

    // Get HTML elements
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");


    // Add event listener
    addTaskBtn.addEventListener("click", addTask);

    // Function to add task
    function addTask() {

        const taskText = taskInput.value;

        // Validate input
        if (taskText === "") {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a task!'
            });

            return;
        }

        // Create task object
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        // Add task to array
        tasks.push(task);

        // Display tasks
        displayTasks();

        // Clear input
        taskInput.value = "";

        // Success message
        Swal.fire({
            icon: 'success',
            title: 'Task Added!'
        });
    }

    // Function to display tasks
    function displayTasks() {

        // Clear current list
        taskList.innerHTML = "";

        // Loop through tasks
        tasks.forEach(task => {

            const li = document.createElement("li");
            
            li.textContent = task.text;
            //Add completed style
            if (task.completed) {
                li.style.textDecoration = "line-through";
            }

            //Toggle completed task
            li.addEventListener("click", () =>{
                task.completed = !task.completed;

                displayTasks();
            });

            //Create delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            
            //Delete task

            deleteBtn.addEventListener("click", (event) =>{

                //Prevent li click event
                event.stopPropagation();


                tasks = tasks.filter(t => t.id !==task.id)
                displayTasks();
        });
         // Add button to list item
            li.appendChild(deleteBtn);
            // add list item to ul
            taskList.appendChild(li);
    
    })
    }

