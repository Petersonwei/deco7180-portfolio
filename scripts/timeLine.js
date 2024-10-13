// Intersection Observer for revealing timeline content on scroll
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger animation when 20% of the element is in view
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
