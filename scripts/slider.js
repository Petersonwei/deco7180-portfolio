/**
 * Reference:
 * W3Schools. (2024). How to - Slideshow. https://www.w3schools.com/howto/howto_js_slideshow.asp
 */
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".mySlides");
    let slideIndex = 0;

    // Show the slide based on index
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

    // Modal functionality
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalClose = document.querySelector(".close");
    const prevModal = document.querySelector(".prevModal");
    const nextModal = document.querySelector(".nextModal");

    // Open modal on image click
    slides.forEach((slide, i) => {
        slide.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = slide.querySelector("img").src; // Show the clicked image in modal
            showSlide(i); // Sync slide index in modal
        });
    });

    // Close modal
    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Modal next/previous buttons
    nextModal.addEventListener("click", () => {
        showSlide(slideIndex + 1);
        modalImg.src = slides[slideIndex].querySelector("img").src;
    });

    prevModal.addEventListener("click", () => {
        showSlide(slideIndex - 1);
        modalImg.src = slides[slideIndex].querySelector("img").src;
    });

    // Close modal on outside click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

