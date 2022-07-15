export function openSidePanels() {
  const header = document.querySelector(".header");
  const addBtn = document.querySelector(".add-project__button");
  const sideBarButtons = document.querySelectorAll(".sidebar__buttons");

  sideBarButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      let target = e.target;

      if (target.tagName === "H3") {
        header.textContent = target.textContent;
        // For some reason, inbox font is really small without setting it manually to 40pt
        header.style.fontSize = "40pt";
        addBtn.style.display = "none";

        if (target.textContent === 'Inbox') {
            console.log('Opening inbox...');
        } else if (target.textContent === 'Today') {
            console.log('Opening today...');
        } else {
            console.log('Opening Upcoming...');
        }
      }
    });
  });
}
