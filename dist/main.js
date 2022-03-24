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

eval("class Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n}\r\n\r\nclass UI {\r\n  static addProjectName() {\r\n    const projectValue = document.querySelector(\".sidebar__input\").value;\r\n    const alert = document.querySelector(\".sidebar__error\");\r\n    const sidebar = document.querySelector(\".sidebar__list\");\r\n    const listEntry = document.createElement(\"li\");\r\n\r\n    if (projectValue < 1) {\r\n      alert.style.display = \"block\";\r\n    }\r\n    listEntry.textContent = projectValue;\r\n    listEntry.className = projectValue;\r\n    sidebar.appendChild(listEntry);\r\n\r\n    return listEntry;\r\n  }\r\n\r\n  static addTasks() {\r\n    \r\n  }\r\n\r\n  static displayTasks() {\r\n    const main = document.querySelector('.main')\r\n\r\n    // Add Button\r\n    const addTaskButton = document.createElement('button');\r\n    addTaskButton.className = '.main__add-button'\r\n\r\n    //\r\n   \r\n    \r\n    \r\n  }\r\n}\r\n\r\nconst projectAddButton = document.querySelector(\".sidebar__button\");\r\n\r\nprojectAddButton.addEventListener(\"click\", UI.addProjectName);\r\n\r\nconst project = UI.addProjectName()\r\nproject.addEventListener('click', UI.displayTasks)\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

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