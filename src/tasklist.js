export default function taskList() {
  const main = document.querySelector(".main");

  const addButton = document.createElement("button");

  addButton.textContent = "Add Task";
  addButton.classList.add("main__add-button");
  main.appendChild(addButton);

  addButton.addEventListener("click", (e) => {
    addButton.style.display = "none";

    // taskLabel
    const taskLabel = document.createElement("label");
    taskLabel.id = "taskName";
    taskLabel.textContent = "Enter your task:";

    //taskInput
    const taskInput = document.createElement("input");
    taskInput.id = "taskName";

    // Submit Button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.classList.add("main__submit-button");
    submitButton.textContent = "Submit";

    // Appends to main div
    main.appendChild(taskLabel);
    main.appendChild(taskInput);
    main.appendChild(submitButton);

    submitButton.addEventListener("click", () => {
      const userTask = taskInput.value;
      
      const taskDiv = document.createElement("div");

      // Priority Button
      const priorityButton = document.createElement('button');
      priorityButton.classList.add('main__task-list__priority-button');
      // Task description
      const taskDescription = document.createElement('p');
      // Remove Button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'x'
      removeButton.classList.add('main__task-list__remove-button')

      // Alert 
      const submitAlert = document.createElement('p')
      setTimeout(() => submitAlert.remove(), 2000)
      // hr that appears under each task
      const line = document.createElement('hr')


      if (userTask.length < 1) {
        main.insertBefore(submitAlert, taskInput)
        submitAlert.textContent = 'Please enter a task!'
        submitAlert.style.color = 'var(--clr-red)';
      } else {
        taskDescription.textContent = userTask;
        taskDiv.classList.add("main__task-list");


        // append to taskList div
        taskDiv.appendChild(priorityButton);
        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(removeButton);

        // appends to main
        main.appendChild(taskDiv);
        main.append(line)
      }
    });
  });
}

/*   if (userTask.length < 1) {
  const taskDiv = document.createElement("div");
      alert("Please enter a task.");
    } else {
      taskDiv.textContent = userTask;
      taskDiv.classList.add('main__task-list')
      main.appendChild(taskDiv);
    }
  });
  */
