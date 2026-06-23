// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
  console.log('Furni website loaded successfully');

  // Navbar toggle
  const navbarToggle = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  }

  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Active nav link
  const currentLocation = location.pathname;
  const menuItems = document.querySelectorAll('.nav-link');
  menuItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation) {
      item.classList.add('active');
    }
  });
});
