// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple alert for menu items (placeholder for ordering)
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Item added to cart! (This is a demo)');
    });
});