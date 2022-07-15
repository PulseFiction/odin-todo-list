import "./style.css";
import {onLoad} from "./domManipulation";
import {addProject} from "./createProject"
import {openProject} from "./openProject";
import {createTask} from "./createTodo";
import {openSidePanels} from "./openSideBar";







onLoad();

addProject();

openProject();

createTask();

openSidePanels()



