
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll("#rating .star");
  const output = document.getElementById("rating-value");
  let selected = 0;

  if (!stars.length || !output) return; // Verifica que existan los elementos

  stars.forEach(star => {
    const value = parseInt(star.dataset.value);

    star.addEventListener("mouseover", () => {
      stars.forEach(s => {
        s.style.color = parseInt(s.dataset.value) <= value ? "gold" : "gray";
      });
    });

    star.addEventListener("mouseout", () => {
      stars.forEach(s => {
        s.style.color = parseInt(s.dataset.value) <= selected ? "gold" : "gray";
      });
    });

    star.addEventListener("click", () => {
      selected = value;
      output.textContent = "Tu calificación: " + selected;
    });
  });

  // Color inicial
  stars.forEach(s => s.style.color = "gray");
});