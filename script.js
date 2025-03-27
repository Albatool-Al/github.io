// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#1a252f';
        navbar.style.padding = '1rem 5%';
    } else {
        navbar.style.backgroundColor = '#2c3e50';
        navbar.style.padding = '1.5rem 5%';
    }
});

// Mobile menu toggle (for smaller screens)
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
mobileMenuToggle.classList.add('mobile-menu-toggle');
document.body.appendChild(mobileMenuToggle);

mobileMenuToggle.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').style.display = 'none';
        }
    });
});