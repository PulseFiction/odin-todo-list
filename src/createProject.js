

export function addProject() {
    
    const button = document.querySelector('.add-project__button');
    const projectDiv = document.querySelector('.add-project__div');
    
    
    
   
    
    
    button.addEventListener('click', () => {
        const titleInput = document.createElement('input');
        titleInput.placeholder = 'Enter Project Name'
        titleInput.style.textAlign = 'center'
        
        const submit = document.createElement('button');
        submit.classList.add('add-project__submit');
        submit.textContent = 'Submit'


        projectDiv.appendChild(titleInput);
        projectDiv.append(submit);
        button.style.display = 'none';

        
        submit.addEventListener('click', () => {
            const projectsList = document.querySelector('.sidebar__projects__ul');
            
            if (titleInput.value <= 0) {
                titleInput.classList.add('add-project__input-error')
                titleInput.placeholder = 'Name not entered!'
            } else {
                const project = document.createElement('h3');
                project.textContent = titleInput.value;
                projectsList.appendChild(project);
                button.style.display = 'block';
                submit.style.display = 'none';
                titleInput.style.display = 'none';
            }
        })

    })

    
    
}