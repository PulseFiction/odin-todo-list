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

    if (projectValue < 1) {
      alert.style.display = "block";
    }
    listEntry.textContent = projectValue;
    listEntry.className = projectValue;
    sidebar.appendChild(listEntry);

    return listEntry;
  }

  static addTasks() {
    
  }

  static displayTasks() {
    const main = document.querySelector('.main')

    // Add Button
    const addTaskButton = document.createElement('button');
    addTaskButton.className = '.main__add-button'

    //
   
    
    
  }
}

const projectAddButton = document.querySelector(".sidebar__button");

projectAddButton.addEventListener("click", UI.addProjectName);

const project = UI.addProjectName()
project.addEventListener('click', UI.displayTasks)