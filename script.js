// ===============================
// TYPING EFFECT (SMOOTH VERSION)
// ===============================
const texts = ["Web Developer", "AI/ML Enthusiast", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    if (count === texts.length) count = 0;

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(typeEffect, 1500);
    } else {
        setTimeout(typeEffect, 70);
    }
}

// Start typing after load
window.addEventListener("load", typeEffect);


// ===============================
// SMOOTH SCROLL (NAV LINKS)
// ===============================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// RESUME DOWNLOAD
// ===============================
function downloadResume() {
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "Ujjawal_Tiwari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// ===============================
// SCROLL ANIMATION (REVEAL)
// ===============================
const revealElements = document.querySelectorAll("section");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// ===============================
// CURSOR EFFECT (SMOOTH GLOW)
// ===============================
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});