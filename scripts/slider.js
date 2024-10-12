document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".mySlides");
    let slideIndex = 0;

    // Show the slide base on index
    function showSlide(index) {
        slideIndex = (index + slides.length) % slides.length; // Wrap index
        slides.forEach((slide, i) => {
            slide.style.display = i === slideIndex ? "block" : "none"; // Toggle visibility
        });
    }

    // Initial display
    showSlide(slideIndex);

    // Next/previous navigation
    document.querySelector(".next").addEventListener("click", () => {
        showSlide(slideIndex + 1);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        showSlide(slideIndex - 1);
    });
});
