import "./style.css";
import taskList from "./tasklist";

const addButton = document.querySelector(".sidebar__button");

/*
function newProject() {
    
    const userInput = document.querySelector('.sidebar__input')
    const projectName = userInput.value;
    
    const projectList = document.querySelector('.sidebar__list')
    const projectListEntry = document.createElement('li');
    
    const errorMessage = document.querySelector('.sidebar__error')

    if (projectName.length <= 0) {
        errorMessage.style.display = 'block'
    } else {
        errorMessage.style.display = 'none'
        projectListEntry.textContent = projectName;
        projectListEntry.classList.add(projectName);
        projectList.appendChild(projectListEntry);
    }

    projectListEntry.addEventListener('click', taskList)

}
*/

class Project {
  constructor(name) {
    this.name = name;
  }
}

class UI {
  static newProject() {
    const userInput = document.querySelector(".sidebar__input");
    const projectName = userInput.value;

    const projectList = document.querySelector(".sidebar__list");
    const projectListEntry = document.createElement("li");

    const errorMessage = document.querySelector(".sidebar__error");
    

    if (projectName.length <= 0) {
      errorMessage.style.display = "block";
      
    } else {
      errorMessage.style.display = "none";
      projectListEntry.textContent = projectName;
      projectListEntry.classList.add(projectName);
      projectList.appendChild(projectListEntry);

      const book = new Project(projectName);
    }

    projectListEntry.addEventListener("click", taskList);
  }

  static addTask() {
     


    
  }
}

class Store {
  static addBook(book) {}
}

addButton.addEventListener("click", UI.newProject);


