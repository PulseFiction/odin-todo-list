const content = document.querySelector('.content');

import Calendar from "./images/Calendar.png";
import Inbox from "./images/Inbox.png";
import Clipboard from "./images/Clipboard.png";

export function onLoad() {
    // Sidebar
    const sideBarDiv = document.createElement("div");
    sideBarDiv.classList.add("sidebar");
  
    const title = document.createElement("h1");
    title.textContent = "To-do List";
  
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("sidebar__buttons");
  
    // Inbox
    const inboxDiv = document.createElement("div");
    inboxDiv.classList.add("inbox");
    const inbox = document.createElement("h3");
    inbox.textContent = "Inbox";
    const inboxIcon = new Image();
    inboxIcon.src = Inbox;
  
    inboxDiv.appendChild(inboxIcon);
    inboxDiv.appendChild(inbox);
  
    
  
   
  
    // Today
    const todayDiv = document.createElement("div");
    todayDiv.classList.add("today");
    const today = document.createElement("h3");
    today.textContent = "Today";
    const todayIcon = new Image();
    todayIcon.src = Calendar;
  
    todayDiv.appendChild(todayIcon);
    todayDiv.appendChild(today);
  
    
    
  
    // Upcoming
    const upcomingDiv = document.createElement("div");
    upcomingDiv.classList.add("upcoming");
    const upcoming = document.createElement("h3");
    upcoming.textContent = "Upcoming";
    
    const upcomingIcon = new Image();
    upcomingIcon.src = Clipboard;
  
    upcomingDiv.appendChild(upcomingIcon);
    upcomingDiv.append(upcoming);
  
    
  
    // Appends to ButtonDiv
  
    buttonDiv.appendChild(inboxDiv);
    buttonDiv.appendChild(todayDiv);
    buttonDiv.appendChild(upcomingDiv);
  
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("sidebar__projects");
    const projectsTitle = document.createElement("h2");
    projectsTitle.textContent = "Projects List";
  
    const projectsList = document.createElement("ul");
    projectsList.classList.add("sidebar__projects__ul");
  
    projectDiv.appendChild(projectsTitle);
    projectDiv.appendChild(projectsList);
  
    sideBarDiv.appendChild(title);
    sideBarDiv.appendChild(buttonDiv);
    sideBarDiv.appendChild(projectDiv);
  
    // Header
  
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    const headerTitle = document.createElement("h2");
    headerTitle.classList.add("header__title");
    headerTitle.textContent = "Projects";
    headerDiv.appendChild(headerTitle);
  
    // Main
  
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
  
    // Add Project Button 
    const addProjectDiv = document.createElement('div');
    addProjectDiv.classList.add('add-project__div');
    const addProjectButton = document.createElement('button');
    addProjectDiv.appendChild(addProjectButton);
    addProjectButton.classList.add('add-project__button')
    addProjectButton.textContent = 'New Project';

    mainDiv.appendChild(addProjectDiv)

    // Projects Div

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects__div')

    mainDiv.appendChild(projectsDiv);



    // Content Appends

    content.appendChild(sideBarDiv);
    content.appendChild(headerDiv);
    content.appendChild(mainDiv);

    

  }