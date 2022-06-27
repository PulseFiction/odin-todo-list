import Trash from "./images/trash.png";

export function createTask() {
  const main = document.querySelector(".main");

  main.addEventListener("click", (e) => {
    let target = e.target;

    if (target.className !== "project__tasks") return;

    target.style.display = "none";

    // New elements

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("todo__input__div");
    const todoInput = document.createElement("input");
    todoInput.classList.add("todo__input");
    const todoBtnDiv = document.createElement("div");
    todoBtnDiv.classList.add("todo__button__div");
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add Todo";
    addTodoBtn.classList.add("todo__add");
    const cancelTodoBtn = document.createElement("button");
    cancelTodoBtn.textContent = "Cancel";
    cancelTodoBtn.classList.add("todo__cancel");

    todoBtnDiv.appendChild(addTodoBtn);
    todoBtnDiv.appendChild(cancelTodoBtn);

    inputDiv.appendChild(todoInput);
    inputDiv.appendChild(todoBtnDiv);

    main.appendChild(inputDiv);

    addTodoBtn.addEventListener("click", (taskBtn) => {
      taskBtn = document.querySelector(".project__tasks");
      const userInput = todoInput.value;

      if (userInput.length === 0) {
        alert("Please enter a task in the box.");
      } else {
        const todoDiv = document.createElement("div");
        const todo = document.createElement("div");
        const trashIcon = new Image();
        trashIcon.src = Trash;
        todo.classList.add("todo");

        todo.textContent = userInput;
        todo.appendChild(trashIcon);

        todoDiv.appendChild(todo);

        taskBtn.style.display = "flex";
        inputDiv.style.display = "none";

        main.appendChild(todoDiv);
      }
    });

    cancelTodoBtn.addEventListener("click", (taskBtn) => {
      taskBtn = document.querySelector(".project__tasks");

      taskBtn.style.display = "flex";
      inputDiv.style.display = "none";
    });
  });

  console.log("Create todo is working");
}
