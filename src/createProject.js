import Arrow from "./images/arrow.png";

export function addProject() {
  const button = document.querySelector(".add-project__button");
  const projectDiv = document.querySelector(".add-project__div");
  const main = document.querySelector('.main')

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
      if (titleInput.value <= 0) {
        titleInput.classList.add("add-project__input-error");
        titleInput.placeholder = "Name not entered!";
      } else {
        const projectListItem = document.createElement("li");
        projectListItem.classList.add("li__project");
        const arrowIcon = new Image();
        arrowIcon.src = Arrow;
        projectListItem.appendChild(arrowIcon);



        // Create page for project
        const projectPage = document.createElement('div');
        projectPage.classList.add('project__page');
        main.appendChild(projectPage);
        

        // ------------------------
        const projectListName = document.createElement("h3");
        projectListName.classList.add("list__project__heading");

        projectListName.textContent = titleInput.value;

        projectListItem.appendChild(projectListName);

        projectsList.appendChild(projectListItem);

        button.style.display = "block";
        submit.style.display = "none";
        titleInput.style.display = "none";
      }
    });
  });
}
