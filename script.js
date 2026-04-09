const texts = ["Web Developer", "AI/ML Enthusiast", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (!document.getElementById("typing")) return;

    if (count === texts.length) count = 0;

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 80);
    }
})();

/* Landing */
function enterSite() {
    document.getElementById("landing").style.display = "none";
}

/* Cursor */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

/* Download Resume */
function downloadResume() {
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "resume.pdf";
    link.click();
}

/* AOS */
AOS.init({
    duration: 1000,
    once: true
});