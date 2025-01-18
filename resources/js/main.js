// Populates the projects menu on index.html only
function getProjectsMenu() {
  document.getElementById('dropdown-options').innerHTML = `
    <li><a href="./projects/mathsquiz.html">Maths Quiz</a></li>
    <li><a href="./projects/todolist.html">To Do List</a></li>
    <li><a href="./projects/quiztsar.html">Quiz-Tsar</a></li>
  `;
}

// Opens hamburger menu in portrait mode.
function showMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === '' ? 'flex' : '';
}

// Changes display of "Projects" link in nav bar according to mobile or large display.
function changeProjectMenu() {
  const projectsLink = document.getElementById('projects-link');
  const chevron = document.getElementById('chevron');

  if (screen.height > screen.width) {
    projectsLink.innerHTML = 'Projects';
    chevron.style.display = 'block';
  } else if (screen.height < screen.width) {
    projectsLink.innerHTML = 'Projects ˅';
    chevron.style.display = '';
  }
}

// For mobile screen, opens project sub-menu as accordian menu
function openAccordian() {
  const projectsMenu = document.getElementsByClassName('dropdown')[0];
  const chevron = document.getElementById('chevron');

  if (projectsMenu.classList.contains('accordian')) {
    projectsMenu.classList.remove('accordian');
    chevron.style.transform = 'rotateX(0)';
  } else {
    projectsMenu.classList.add('accordian');
    chevron.style.transform = 'rotateX(180deg)';
  }
}