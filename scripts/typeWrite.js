/*
Reference:
Vautin, M. (2024). Typewrite: A JavaScript typewriter library which animates typing, deleting, and selecting text. GitHub. https://github.com/mrvautin/typewrite

This library is used to handle the text animation for typing and deleting effects in this project.
*/

// Text animation
const texts = ["Frontend Developer", "Full Stack Developer", "UI Designer", "Tech Enthusiast"];
let count = 0;
let letterIndex = 0;
let typingSpeed = 150; // Typing speed
let deletingSpeed = 100; // Deleting speed
let pauseBetweenWords = 2000; // Pause after typing a word

// Select where the text will be displayed
const textElement = document.querySelector('.text-animation h3');

// Main typing function
function typeAnimation() {
    let currentText = texts[count];
    let isDeleting = false;

    function updateText() {
        // Type or delete letters
        letterIndex = isDeleting ? letterIndex - 1 : letterIndex + 1;

        // Update the text
        textElement.textContent = currentText.substring(0, letterIndex);

        // If word is fully typed, pause, then delete
        if (!isDeleting && letterIndex === currentText.length) {
            setTimeout(() => isDeleting = true, pauseBetweenWords);
        } 
        // Move to next word after deleting
        else if (isDeleting && letterIndex === 0) {
            count = (count + 1) % texts.length;
            isDeleting = false;
        }

        // Adjust speed for typing/deleting
        let speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(updateText, speed);
    }

    updateText(); // Start the loop
}

typeAnimation(); // Run the animation
