import './typeWrite.js';
import './slider.js';
import './backToTop.js';
import './skillSlider.js';
import './timeLine.js';

//Mobile Menu
document.getElementById("menu-icon").addEventListener("click", function() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});

// Close the menu when a nav link is clicked
var navLinkItems = document.querySelectorAll(".nav-links a");
navLinkItems.forEach(function(link) {
  link.addEventListener("click", function() {
      var navLinks = document.querySelector(".nav-links");
      navLinks.classList.remove("active");
  });
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

// Fade-In Text Effect
document.addEventListener('DOMContentLoaded', function() {
  const fadeInSections = document.querySelectorAll('.fade-in-section');

  function handleScroll() {
      const triggerBottom = window.innerHeight / 5 * 4;

      fadeInSections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;
          
          if (sectionTop < triggerBottom && sectionBottom > 0) {
              // Section is in view
              section.classList.add('is-visible');
              section.querySelectorAll('.fade-in-text').forEach((el, index) => {
                  el.style.setProperty('--item-index', index);
                  el.classList.add('is-visible');
              });
          } else {
              // Section is out of view
              section.classList.remove('is-visible');
              section.querySelectorAll('.fade-in-text').forEach(el => el.classList.remove('is-visible'));
          }
      });
  }

  window.addEventListener('scroll', handleScroll);

  // Initial check in case any sections are already in view when the page loads
  handleScroll();
});



