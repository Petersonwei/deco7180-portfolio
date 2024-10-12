const backToTopBtn = document.getElementById('backToTopBtn');

// Show and hide back to top button
window.onscroll = () => toggleBackToTopBtn();

const toggleBackToTopBtn = () => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    backToTopBtn.classList.toggle('show', scrollPos > 200);
};

// Click and scrollto top 
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
