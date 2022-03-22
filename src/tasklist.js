export default function taskList() {
  const main = document.querySelector(".main");

  const addButton = document.createElement("button");
  addButton.textContent = "Add Task";
  addButton.classList.add("main__add-button");

  main.appendChild(addButton);

  addButton.addEventListener("click", () => {
    const userTask = prompt("Add new task");
    const taskDiv = document.createElement("div");

    if (userTask.length < 1) {
      alert("Please enter a task.");
    } else {
      taskDiv.textContent = userTask;
      taskDiv.classList.add('main__task-list')
      main.appendChild(taskDiv);
    }
  });
}
