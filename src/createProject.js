import Arrow from "./images/arrow.png";

export function addProject() {
  const button = document.querySelector(".add-project__button");
  const projectDiv = document.querySelector(".add-project__div");

  button.addEventListener("click", () => {
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter Project Name";
    titleInput.style.textAlign = "center";

    const submit = document.createElement("button");
    submit.classList.add("add-project__submit");
    submit.textContent = "Submit";

    projectDiv.appendChild(titleInput);
    projectDiv.append(submit);
    button.style.display = "none";

    submit.addEventListener("click", () => {
      const projectsList = document.querySelector(".sidebar__projects__ul");
      const projectMain = document.querySelector(".projects__div");
      if (titleInput.value <= 0) {
        titleInput.classList.add("add-project__input-error");
        titleInput.placeholder = "Name not entered!";
      } else {
        const projectListItem = document.createElement("li");
        projectListItem.classList.add("li__project");
        const arrowIcon = new Image();
        arrowIcon.src = Arrow;
        projectListItem.appendChild(arrowIcon);

        const projectListName = document.createElement("h3");
        projectListName.classList.add("list__project__heading");
        
        //const line = document.createElement("hr");
        //const projectBoxName = document.createElement("h3");
        
        //const projectDiv = document.createElement("div");
        //projectDiv.classList.add("project__container");
        //const todoDiv = document.createElement("div");

        projectListName.textContent = titleInput.value;
        //projectBoxName.textContent = titleInput.value;

        projectListItem.appendChild(projectListName);
        //projectDiv.appendChild(projectBoxName);
        //projectDiv.appendChild(line);
       // projectDiv.appendChild(todoDiv);

        projectsList.appendChild(projectListItem);
        //projectMain.appendChild(projectDiv);

        button.style.display = "block";
        submit.style.display = "none";
        titleInput.style.display = "none";
      }
    });

    


})

}
