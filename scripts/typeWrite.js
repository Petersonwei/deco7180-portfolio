/**
 * Reference:  
 * Vautin, M. (2024). Typewrite: A JavaScript typewriter library which animates typing, deleting, 
 * and selecting text. GitHub. https://github.com/mrvautin/typewrite
 */

const texts = [];class TypewriterEffect extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const typingSpeed = parseInt(this.getAttribute('typing-speed')) || 150;
        const deletingSpeed = parseInt(this.getAttribute('deleting-speed')) || 100;
        const pauseBetweenWords = parseInt(this.getAttribute('pause')) || 2000;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                .typewriter::after {
                    content: '|';
                    animation: blink 0.7s infinite;
                }
                @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0; }
                    100% { opacity: 1; }
                }
            </style>
            <span class="typewriter"></span>
        `;

        const textElement = this.shadowRoot.querySelector('.typewriter');
        const texts = Array.from(this.children).map(child => child.textContent.trim());

        let count = 0;
        let letterIndex = 0;
        let isDeleting = false;

        function typeAnimation() {
            let currentText = texts[count];
            textElement.textContent = currentText.substring(0, letterIndex);

            if (!isDeleting) {
                if (letterIndex < currentText.length) {
                    letterIndex++;
                    setTimeout(typeAnimation, typingSpeed);
                } else {
                    setTimeout(() => {
                        isDeleting = true;
                        setTimeout(typeAnimation, deletingSpeed);
                    }, pauseBetweenWords);
                }
            } else {
                if (letterIndex > 0) {
                    letterIndex--;
                    setTimeout(typeAnimation, deletingSpeed);
                } else {
                    isDeleting = false;
                    count = (count + 1) % texts.length;
                    setTimeout(typeAnimation, typingSpeed);
                }
            }
        }

        if (texts.length > 0) {
            typeAnimation();
        }
    }
}

customElements.define('typewriter-effect', TypewriterEffect);
