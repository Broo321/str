document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nawigacja");
  const hamburger = document.querySelector(".hamburger");
  const headerHeight = 245;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      
      const id = link.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      const targetY = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetY,
        behavior: "smooth"
      });

      nav?.classList.remove("active");
      hamburger?.classList.remove("active");
    });
  });

  hamburger?.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});
