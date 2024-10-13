document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.skills-track');
    const items = Array.from(document.querySelectorAll('.skill-item'));
    let totalWidth = 0;
    
    // Calculate total width of the items
    items.forEach(item => {
        totalWidth += item.offsetWidth + parseInt(getComputedStyle(item).marginRight);
    });

    const containerWidth = document.querySelector('.skills-slider').offsetWidth;

    // Clone items until the total width of the track is enough to fill at least twice the container width
    while (totalWidth < containerWidth * 2) { // Ensure twice the container width to loop smoothly
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
            totalWidth += item.offsetWidth + parseInt(getComputedStyle(item).marginRight);
        });
    }
});
