import './typeWrite.js';
import './slider.js';

//Mobile Menu
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


// Smooth scroll to anchor
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target && window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    });
  });
});

