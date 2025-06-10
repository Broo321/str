document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll dla linków nawigacyjnych
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Zamknięcie menu po kliknięciu w link (dla wersji mobilnej)
      const nav = document.querySelector(".nawigacja");
      const hamburger = document.querySelector(".hamburger");
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  // Obsługa hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nawigacja");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active"); // Dodanie animacji do hamburgera
  });
});
