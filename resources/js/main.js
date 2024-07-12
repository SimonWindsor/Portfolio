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
  const skills = document.getElementById('skills-link');
  const contact = document.getElementById('contact-link');

  if (projectsMenu.classList.contains('accordian')) {
    projectsMenu.classList.remove('accordian');
    chevron.style.transform = 'rotateX(0)';
  } else {
    projectsMenu.classList.add('accordian');
    chevron.style.transform = 'rotateX(180deg)';
  }
}