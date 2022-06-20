


export function openProject() {
    const mainPageDiv = document.querySelector('.main');
    const mainProjectDiv = document.querySelector('.projects__div');
    const listProject = document.querySelector('.sidebar__projects__ul');
    const title = document.querySelector('.header__title');
    const addProjectDiv = document.querySelector('.add-project__div');
    
    
    
    listProject.addEventListener('click', openListDiv);



   

    function openListDiv(e) {
        let target = e.target;
        // Needs duplicate projectContainer variable otherwise variable is null
        const projectContainer = document.querySelector('.project__container');

        if (target.className !== 'list__project__heading') return;

        title.textContent = target.textContent;
        addProjectDiv.style.display = 'none';
        projectContainer.style.display = 'none';

        const projectPage = document.createElement('div');
        projectPage.classList.add('project__page');
        mainPageDiv.appendChild(projectPage);
    }
}

