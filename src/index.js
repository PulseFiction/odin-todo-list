class Project {
  constructor(name) {
    this.name = name;
  }
}

class UI {
  static addProjectName() {
    const projectValue = document.querySelector(".sidebar__input").value;
    const alert = document.querySelector(".sidebar__error");
    const sidebar = document.querySelector(".sidebar__list");
    const listEntry = document.createElement("li");
    
   

    if (projectValue.length < 1) {
      alert.style.display = 'flex'
    } else {
      alert.style.display = "none";
      listEntry.textContent = projectValue;
      listEntry.className = projectValue;
      sidebar.appendChild(listEntry);
      
      
    }
     return listEntry;
  }


  static displayTasks() {
    const main = document.querySelector('.main')

    // Add Button
    const addTaskButton = document.createElement('button');
    addTaskButton.className = 'main__add-button';
    addTaskButton.textContent = 'Add Task';
    //
    main.appendChild(addTaskButton);

    return addTaskButton;
  
    
  }

  static addTasks(e) {
    e.preventDefault()
   console.log('Hi')

   e.target.style.display = 'none'

  // Main
  const main = document.querySelector('.main')
  // Div for new inputs 
  const taskDiv = document.createElement('div')
  taskDiv.className = 'main__task-div'
  // Create input for task
  const taskInput = document.createElement('input');
  taskInput.className = 'main__task-div__input';
  

  // Submit Button for task
  const submitButton = document.createElement('button')
  submitButton.className = 'main__submit-button';
  submitButton.textContent = 'New Task';
  

  // Appends
  taskDiv.appendChild(taskInput);
  taskDiv.appendChild(submitButton);
  main.appendChild(taskDiv);


  submitButton.addEventListener('click', () => {
    const taskValue = taskInput.value;
    

    if (taskValue.length < 1) {
      const alert = document.createElement('p');
      alert.textContent = 'Please enter a valid task name!';
      alert.style.color = 'red';
    } else {
      const newTaskDiv = document.createElement('div');
      newTaskDiv.className = 'main__task-list';
      newTaskDiv.textContent = taskValue;

      const priorityButton = document.createElement('button');
      priorityButton.className = 'main__task-list__priority-button';

      const removeButton = document.createElement('button');
      removeButton.className = 'main__task-list__remove-button';

      // Apppends
      
      newTaskDiv.appendChild(priorityButton)
      newTaskDiv.appendChild(removeButton)

    }
  })
  

  





    

    
  }
}


const projectAddButton = document.querySelector(".sidebar__button");

projectAddButton.addEventListener("click", UI.addProjectName);

const project = UI.addProjectName();
project.addEventListener('click', UI.displayTasks);

const addButton = UI.displayTasks();
addButton.addEventListener('click', UI.addTasks)