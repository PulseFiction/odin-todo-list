import './style.css';
import taskList from './tasklist';

const addButton = document.querySelector('.sidebar__button');

addButton.addEventListener('click', newProject)


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







