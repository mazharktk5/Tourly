
  AOS.init({
    duration: 1400,     // animation duration
    once: false,        // animate every time the element enters viewport
    mirror: true 
  });


  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
