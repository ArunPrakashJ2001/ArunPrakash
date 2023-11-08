// Function to toggle the navigation menu on small screens
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Add an event listener to the menu button
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop - 50, // Adjust the scroll position for header height
            });
        }
    });
});

