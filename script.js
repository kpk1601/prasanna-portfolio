// Portfolio Welcome Message
console.log("Welcome to Prasanna Kumar's Portfolio!");

// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});
// Animated Professional Titles

const roles = [
    "Python Developer",
    "AI Enthusiast",
    "Machine Learning Explorer",
    "Creative Designer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const element = document.getElementById("typing-text");

    if (!element) return;

    const currentRole = roles[roleIndex];

    if (deleting) {
        element.textContent = currentRole.substring(0, characterIndex--);
    } else {
        element.textContent = currentRole.substring(0, characterIndex++);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex > currentRole.length) {
        deleting = true;
        speed = 1200;
    }

    if (deleting && characterIndex < 0) {
        deleting = false;
        characterIndex = 0;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    "section h2, .skill-card, .project-card, .experience-card, .workshop-card, .education-card, .certification-card"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});
// HAMBURGER MENU - FIXED

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-menu");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", String(isOpen));

    });

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}
