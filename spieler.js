document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".spieler-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
});