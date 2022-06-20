


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
        projectPage.style.display = 'block';
        
    }
}

