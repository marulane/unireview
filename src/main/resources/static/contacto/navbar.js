document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("navbar-placeholder");
  
    fetch("navbar.html")
      .then(res => res.text())
      .then(data => {
        placeholder.innerHTML = data;
      })
      .catch(err => {
        console.error("Error al cargar la navbar:", err);
      });
  });