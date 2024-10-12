/**
 * Reference:  
 * Vautin, M. (2024). Typewrite: A JavaScript typewriter library which animates typing, deleting, 
 * and selecting text. GitHub. https://github.com/mrvautin/typewrite
 */

const texts = ["Web Developer", "Software Engineer"];
let count = 0;
let letterIndex = 0;
let typingSpeed = 150;
let deletingSpeed = 100;
let pauseBetweenWords = 2000;
let isDeleting = false;

const textElement = document.querySelector('.text-animation h3');

/**
 * typeAnimation - Handles typing and deleting of text phrases.
 * Types out phrases from the `texts` array and deletes them, with pauses in 
 * between. Call this to start the animation.
 */
function typeAnimation() {
    let currentText = texts[count];
    textElement.textContent = currentText.substring(0, letterIndex);

    if (!isDeleting) {
        // Typing the word
        if (letterIndex < currentText.length) {
            letterIndex++;
            setTimeout(typeAnimation, typingSpeed);
        } else {
            // Pause before deleting
            setTimeout(() => {
                isDeleting = true;
                setTimeout(typeAnimation, deletingSpeed);
            }, pauseBetweenWords);
        }
    } else {
        // Deleting the word
        if (letterIndex > 0) {
            letterIndex--;
            setTimeout(typeAnimation, deletingSpeed);
        } else {
            // Move to next word
            isDeleting = false;
            count = (count + 1) % texts.length;
            setTimeout(typeAnimation, typingSpeed);
        }
    }
}

typeAnimation();
