import addWhite from "./images/Add-white.png"


export function openProject() {
    const listProject = document.querySelector('.sidebar__projects__ul');
    const title = document.querySelector('.header__title');
    const addProjectDiv = document.querySelector('.add-project__div');
    
    
    
    
    listProject.addEventListener('click', openListDiv);


    function openListDiv(e) {
        const projectPage = document.querySelector('.project__page');
        let target = e.target;

        if (target.className !== 'list__project__heading') return;

        title.textContent = target.textContent;
        addProjectDiv.style.display = 'none';
        projectPage.style.display = 'flex';

        const taskDiv = document.createElement('button');
        taskDiv.classList.add('project__tasks')
        const taskText = document.createElement('p');
        taskDiv.textContent = 'Add new Task';
        const addIcon = new Image();
        addIcon.src = addWhite;
        taskDiv.appendChild(addIcon);
  
        

        projectPage.appendChild(taskDiv);

        
        
    }

    
}



