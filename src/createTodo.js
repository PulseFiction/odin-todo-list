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
    const date = document.createElement('input');
    date.type = 'date';
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
    inputDiv.appendChild(date);
    inputDiv.appendChild(todoBtnDiv);

    
    main.appendChild(inputDiv);

    addTodoBtn.addEventListener("click", (taskBtn) => {
      taskBtn = document.querySelector(".project__tasks");
      const userInput = todoInput.value;
      const dateInput = date.value;


      console.log(dateInput)

      if (userInput.length === 0 || dateInput.length === 0) {
        alert("Please enter a task in the box or a valid date.");
      } else {
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo__container");
        const todoDiv = document.createElement("div");
        const todo = document.createElement("div");
        const todoDate = document.createElement("div");
        const trashIcon = new Image();
        
        trashIcon.src = Trash;
        trashIcon.classList.add('trash')
        todo.classList.add("todo");
        todoDate.classList.add("todo__date");
        todo.textContent = userInput;
        todoDate.textContent = dateInput
        todo.appendChild(todoDate);
        todo.appendChild(trashIcon);

        todoDiv.appendChild(todo);

        taskBtn.style.display = "flex";
        inputDiv.style.display = "none";

        main.appendChild(todoContainer);
        todoContainer.appendChild(todoDiv);
       


        trashIcon.addEventListener('click', () => {
  
          todo.remove();
        })
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
