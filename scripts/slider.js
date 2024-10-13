/**
 * Slideshow and Modal functionality
 * References:
 * - W3Schools. (2024). How to - Slideshow. https://www.w3schools.com/howto/howto_js_slideshow.asp
 * - W3Schools. (2024). How to create a modal image gallery. https://www.w3schools.com/howto/howto_js_lightbox.asp
 */

class Slideshow {
    constructor(container) {
        this.container = container;
        this.slidesWrapper = container.querySelector('.slides-wrapper');
        this.slides = this.slidesWrapper.querySelectorAll('.mySlides');
        this.prevButton = container.querySelector('[data-slideshow-nav="prev"]');
        this.nextButton = container.querySelector('[data-slideshow-nav="next"]');
        this.currentIndex = 0;

        this.updateSlideNumbers();
        this.showSlide(this.currentIndex);
        this.attachEventListeners();
    }

    updateSlideNumbers() {
        this.slides.forEach((slide, index) => {
            const numbertext = slide.querySelector('.numbertext');
            if (numbertext) {
                numbertext.textContent = `${index + 1} / ${this.slides.length}`;
            }
        });
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    attachEventListeners() {
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());

        // Add click event to open modal
        this.slides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            if (img) {
                img.addEventListener('click', () => {
                    openModal(img.src, this.container.dataset.slideshowId, index);
                });
            }
        });
    }
}

// Modal functionality
let currentModalSlideshow = null;
let currentModalIndex = 0;

function openModal(imageSrc, slideshowId, index) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.style.display = "flex";
    modalImg.src = imageSrc;
    
    currentModalSlideshow = slideshowId;
    currentModalIndex = index;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

function changeModalImage(direction) {
    const slideshow = document.querySelector(`[data-slideshow-id="${currentModalSlideshow}"]`);
    const slides = slideshow.querySelectorAll('.mySlides');
    
    currentModalIndex = (currentModalIndex + direction + slides.length) % slides.length;
    const newImage = slides[currentModalIndex].querySelector('img');
    
    if (newImage) {
        const modalImg = document.getElementById('modalImage');
        modalImg.src = newImage.src;
    }
}

// Initialize all slideshows and set up modal
document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainers = document.querySelectorAll('.slideshow-container');
    slideshowContainers.forEach(container => new Slideshow(container));

    // Modal setup
    const modal = document.getElementById('imageModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const prevModalBtn = modal.querySelector('.prevModal');
    const nextModalBtn = modal.querySelector('.nextModal');

    closeBtn.onclick = closeModal;
    prevModalBtn.onclick = () => changeModalImage(-1);
    nextModalBtn.onclick = () => changeModalImage(1);

    // Close modal when clicking outside the image
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };
});

