const themeBtn = document.querySelector('.colorTheme').getElementsByTagName("button")[0];
let isDark = true;
themeBtn.addEventListener('click', () => {
    if (isDark) {
      // Switch to light
      document.documentElement.style.setProperty('--body-bg', '#ffffff');
      document.documentElement.style.setProperty('--body-col', 'rgb(0, 0, 0)');
      document.documentElement.style.setProperty('--nav-bg', '#ffffff');
      document.documentElement.style.setProperty('--a-col', 'rgb(0, 0, 0)');
      document.documentElement.style.setProperty('--rightSec-bg', 'rgb(64, 42, 15)');
      document.documentElement.style.setProperty('--projectsBtn-bg', 'rgb(246, 173, 38)');
      document.documentElement.style.setProperty('--project-col', 'rgb(0, 0, 0)');
      document.documentElement.style.setProperty('--about-content-col', 'rgb(100, 25, 25)');
      document.documentElement.style.setProperty('--about-heading-col', 'rgb(0, 0, 0)');
    } else {
      // Switch to dark
      document.documentElement.style.setProperty('--body-bg', 'rgb(0, 0, 33)');
      document.documentElement.style.setProperty('--body-col', '#ffffff');
      document.documentElement.style.setProperty('--nav-bg', 'rgb(15, 15, 60)');
      document.documentElement.style.setProperty('--a-col', '#ffffff');
      document.documentElement.style.setProperty('--rightSec-bg', 'rgb(77, 15, 15)');
      document.documentElement.style.setProperty('--projectsBtn-bg', 'rgb(246, 38, 38)');
      document.documentElement.style.setProperty('--project-col', '#ffffff');
      document.documentElement.style.setProperty('--about-content-col', 'rgb(255, 105, 180)');
      document.documentElement.style.setProperty('--about-heading-col', 'rgb(203, 203, 203)');
    }
    isDark = !isDark;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.querySelector('nav').offsetHeight; // height of sticky navbar
    const targetPosition = target.offsetTop - navbarHeight - 10;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

function toggleMenu() {
    const rightMenu = document.querySelector('.right');
    rightMenu.classList.toggle('show');
    
    // Close menu when clicking on a link
    if (rightMenu.classList.contains('show')) {
        document.querySelectorAll('.right a').forEach(link => {
            link.addEventListener('click', () => {
                rightMenu.classList.remove('show');
            });
        });
    }
}

const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMobileChange(e) {
  if (e.matches) {
    // Mobile view
    console.log('Mobile view activated');
    document.querySelector(".colorTheme button").innerHTML = ""
    document.querySelector(".colorTheme").classList.toggle("sunIcon")
    let projectsBtnHeight = window.getComputedStyle(document.getElementById("projectsBtn"), ).height
    // document.getElementById("linkedinBtn").style.height = projectsBtnHeight
  } else {
    // Desktop view
    console.log('Desktop view activated');
    document.querySelector(".colorTheme button").innerHTML = "Change Theme"
    document.querySelector(".colorTheme").classList.toggle("sunIcon")
  }

}

// Add listener
mediaQuery.addEventListener("change", handleMobileChange);

// Initial check
handleMobileChange(mediaQuery);