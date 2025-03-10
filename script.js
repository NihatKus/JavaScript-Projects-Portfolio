// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Add animation to skills on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.skill').forEach(skill => {
    skill.style.opacity = 0;
    skill.style.transform = 'translateY(20px)';
    skill.style.transition = 'all 0.5s ease-in-out';
    observer.observe(skill);
});

// Cursor movement
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }
});

// Hide cursor when it leaves the window
document.addEventListener('mouseout', () => {
    if (cursor) {
        cursor.style.display = 'none';
    }
});

document.addEventListener('mouseover', () => {
    if (cursor) {
        cursor.style.display = 'block';
    }
});