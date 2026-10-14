// Shared interactions: mobile navigation, theme toggle, and reveal-on-scroll.
(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const themeButtons = document.querySelectorAll(".theme-toggle");
  const savedTheme = localStorage.getItem("lost-in-space-theme");
  if (savedTheme === "light") document.body.classList.add("light-theme");
  themeButtons.forEach(button => button.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("lost-in-space-theme", document.body.classList.contains("light-theme") ? "light" : "dark");
  }));

  const revealItems = document.querySelectorAll(".stat-card, .planet-preview, .fact-card, .mission-cards article, .planet-card");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealItems.forEach(item => {
      item.classList.add("reveal");
      observer.observe(item);
    });
  } else revealItems.forEach(item => item.classList.add("is-visible"));

  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", event => {
      if (event.target === backdrop) closeModal(backdrop);
    });
    const close = backdrop.querySelector(".modal-close");
    if (close) close.addEventListener("click", () => closeModal(backdrop));
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") document.querySelectorAll(".modal-backdrop.is-open").forEach(closeModal);
  });
})();

function openModal(modal) {
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const close = modal.querySelector(".modal-close");
  if (close) close.focus();
}
function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
