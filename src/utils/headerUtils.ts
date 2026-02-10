// --- HAMBURGER MENU ---
const hamburgerButton = document.getElementById("hamburgerButton");
const hamburgerMenu = document.getElementById("hamburgerMenu");

if (hamburgerButton) {
  hamburgerButton.addEventListener("click", () => {
    hamburgerMenu?.classList.toggle("headerHidden");
  });
}
