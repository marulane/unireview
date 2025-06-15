(function() {
    emailjs.init("TU_USER_ID"); // Reemplaza con tu verdadero User ID de EmailJS
  })();
  
  document.getElementById("formContacto").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    const alertBox = document.getElementById("alertValidaciones");
    const alertText = document.getElementById("alertValidacionesTexto");
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,}$/;
    const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{2,}$/;
  
    if (!nameRegex.test(nombre)) {
      mostrarAlerta("Por favor, introduce un nombre válido (solo letras, mínimo 2 caracteres).");
      return;
    }
  
    if (!emailRegex.test(correo)) {
      mostrarAlerta("Por favor, introduce un correo electrónico válido.");
      return;
    }
  
    if (!phoneRegex.test(telefono)) {
      mostrarAlerta("Por favor, introduce un teléfono válido (mínimo 7 dígitos).");
      return;
    }
  
    if (mensaje.length < 10) {
      mostrarAlerta("El mensaje debe tener al menos 10 caracteres.");
      return;
    }
  
    // Si todo es válido, enviar el email con EmailJS
    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
      nombre,
      correo,
      telefono,
      mensaje
    })
    .then(function(response) {
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarnos.',
      });
  
      // Limpiar el formulario
      document.getElementById("formContacto").reset();
      alertBox.style.display = "none";
    }, function(error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar',
        text: 'Intenta de nuevo más tarde.',
      });
      console.error("Error al enviar:", error);
    });
  });
  
  function mostrarAlerta(mensaje) {
    const alertBox = document.getElementById("alertValidaciones");
    const alertText = document.getElementById("alertValidacionesTexto");
    alertText.innerText = mensaje;
    alertBox.style.display = "block";
  }