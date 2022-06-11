import './style.css'
import Calendar from './images/Calendar.png';
import Inbox from './images/Inbox.png';
import Clipboard from './images/Clipboard.png';

const content = document.querySelector('.content');

export function onLoad() {


    // Sidebar
    const sideBarDiv = document.createElement('div');
    sideBarDiv.classList.add('sidebar');

    const title = document.createElement('h1');
    title.textContent = 'To-do List';

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('sidebar__buttons');
    
   
   // Inbox
    const inbox = document.createElement('h3');
    const inboxIcon = document.createElement('img');
    inboxIcon.src = Inbox;
    inbox.appendChild(inboxIcon);
    inbox.classList.add('inbox');
   /* const inboxIcon = new Image();
    inboxIcon.src = Inbox;
    inbox.appendChild(inboxIcon);
    */

    inbox.textContent = 'Inbox';

   

    // Today
    const today = document.createElement('h3');
    /*
    const todayIcon = new Image();
    todayIcon.src = Calendar;
    today.appendChild(todayIcon);
    */

    today.classList.add('today');
    today.textContent = 'Today';

    // Upcoming
    const upcoming = document.createElement('h3');
    /*
    const upcomingIcon = new Image();
    upcomingIcon.src = Clipboard;
    upcoming.appendChild(upcomingIcon);
    */
    upcoming.textContent = 'Upcoming';

    // Appends to ButtonDiv

    buttonDiv.appendChild(inbox);
    buttonDiv.appendChild(today);
    buttonDiv.appendChild(upcoming);

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('sidebar__projects')
    const projectsTitle = document.createElement('h2');
    projectsTitle.textContent = 'Projects List';

    const projectsList = document.createElement('ul');
    projectsList.classList.add('sidebar__projects-ul');

    projectDiv.appendChild(projectsTitle)
    projectDiv.appendChild(projectsList);

    sideBarDiv.appendChild(title);
    sideBarDiv.appendChild(buttonDiv);
    sideBarDiv.appendChild(projectDiv);

    // Header

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    const headerTitle = document.createElement('h2');
    headerTitle.classList.add('header__title');
    headerTitle.textContent = 'Projects';
    headerDiv.appendChild(headerTitle);

    // Main

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');

    content.appendChild(sideBarDiv)
    content.appendChild(headerDiv);
    content.appendChild(mainDiv);
}

onLoad();



