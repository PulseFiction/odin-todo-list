/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n}\r\n\r\nclass UI {\r\n  static addProjectName() {\r\n    const projectValue = document.querySelector(\".sidebar__input\").value;\r\n    const alert = document.querySelector(\".sidebar__error\");\r\n    const sidebar = document.querySelector(\".sidebar__list\");\r\n    const listEntry = document.createElement(\"li\");\r\n    \r\n   \r\n\r\n    if (projectValue.length < 1) {\r\n      alert.style.display = 'flex'\r\n    } else {\r\n      alert.style.display = \"none\";\r\n      listEntry.textContent = projectValue;\r\n      listEntry.className = projectValue;\r\n      sidebar.appendChild(listEntry);\r\n      \r\n      \r\n    }\r\n     return listEntry;\r\n  }\r\n\r\n\r\n  static displayTasks() {\r\n    const main = document.querySelector('.main')\r\n\r\n    // Add Button\r\n    const addTaskButton = document.createElement('button');\r\n    addTaskButton.className = 'main__add-button';\r\n    addTaskButton.textContent = 'Add Task';\r\n    //\r\n    main.appendChild(addTaskButton);\r\n\r\n    return addTaskButton;\r\n  \r\n    \r\n  }\r\n\r\n  static addTasks(e) {\r\n    e.preventDefault()\r\n   console.log('Hi')\r\n\r\n   e.target.style.display = 'none'\r\n\r\n  // Main\r\n  const main = document.querySelector('.main')\r\n  // Div for new inputs \r\n  const taskDiv = document.createElement('div')\r\n  taskDiv.className = 'main__task-div'\r\n  // Create input for task\r\n  const taskInput = document.createElement('input');\r\n  taskInput.className = 'main__task-div__input';\r\n  \r\n\r\n  // Submit Button for task\r\n  const submitButton = document.createElement('button')\r\n  submitButton.className = 'main__submit-button';\r\n  submitButton.textContent = 'New Task';\r\n  \r\n\r\n  // Appends\r\n  taskDiv.appendChild(taskInput);\r\n  taskDiv.appendChild(submitButton);\r\n  main.appendChild(taskDiv);\r\n\r\n\r\n  submitButton.addEventListener('click', () => {\r\n    const taskValue = taskInput.value;\r\n    \r\n\r\n    if (taskValue.length < 1) {\r\n      const alert = document.createElement('p');\r\n      alert.textContent = 'Please enter a valid task name!';\r\n      alert.style.color = 'red';\r\n    } else {\r\n      const newTaskDiv = document.createElement('div');\r\n      newTaskDiv.className = 'main__task-list';\r\n      newTaskDiv.textContent = taskValue;\r\n\r\n      const priorityButton = document.createElement('button');\r\n      priorityButton.className = 'main__task-list__priority-button';\r\n\r\n      const removeButton = document.createElement('button');\r\n      removeButton.className = 'main__task-list__remove-button';\r\n\r\n      // Apppends\r\n      \r\n      newTaskDiv.appendChild(priorityButton)\r\n      newTaskDiv.appendChild(removeButton)\r\n\r\n    }\r\n  })\r\n  \r\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n    \r\n\r\n    \r\n  }\r\n}\r\n\r\n\r\nconst projectAddButton = document.querySelector(\".sidebar__button\");\r\n\r\nprojectAddButton.addEventListener(\"click\", UI.addProjectName);\r\n\r\nconst project = UI.addProjectName();\r\nproject.addEventListener('click', UI.displayTasks);\r\n\r\nconst addButton = UI.displayTasks();\r\naddButton.addEventListener('click', UI.addTasks)\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;