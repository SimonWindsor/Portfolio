/* Sets the "about-project" div to be visable by default on load for mobile screens
  as well as setting 'screenshots' to be invisable. Both are visible in large screens.
*/
function setAboutAsDefault() {
  if (window.matchMedia("(orientation: portrait)").matches) {
    document.getElementsByClassName('about-project')[0].style.display = 'block';
    document.getElementsByClassName('screenshots')[0].style.display = 'none';
  } else {
    document.getElementsByClassName('about-project')[0].style.display = 'block';
    document.getElementsByClassName('screenshots')[0].style.display = 'block';
  }
}

// Ensures load or refresh always checks the 'select-about' radio.
function checkAbout() {
  document.getElementById('select-about').checked = true;
}

// For choosing the panel on mobile device according to checked raido button.
function selectPanel() {
  if (document.getElementById('select-about').checked) {
    document.getElementsByClassName('about-project')[0].style.display = 'block';
    document.getElementsByClassName('screenshots')[0].style.display = 'none';
  } else if (document.getElementById('select-screenshots').checked) {
    document.getElementsByClassName('about-project')[0].style.display = 'none';
    document.getElementsByClassName('screenshots')[0].style.display = 'block';
  }
}

/* For enabling smooth scrolling in the panels on touch devices so that 
  scrolling of the whole page is prevented.
*/
document.selectElementsByClassName(panel-container)[0].addEventListener('touchmove', (e) => {
  e.stopPropagation();
});