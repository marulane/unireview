// modal-carrera.js
function cargarModalCarrera(callback) {
  fetch('./modal-carrera.html')
    .then(res => res.text())
    .then(html => {
      const contenedor = document.createElement('div');
      contenedor.innerHTML = html;
      document.body.appendChild(contenedor);
      if (callback) callback();
    });
}

function mostrarModalCarrera({ nombre, promedio, numEvaluaciones }) {
  document.getElementById('modalCarreraLabel').textContent = nombre;
  document.getElementById('modalPromedio').textContent = `⭐ ${promedio}`;
  document.getElementById('modalNumEvaluaciones').textContent = `Número de evaluaciones: ${numEvaluaciones}`;

  const contenedorEnlaces = document.getElementById('modalEnlacesCarrera');
  contenedorEnlaces.innerHTML = ""; // Limpiar enlaces anteriores

  // Cargar carreras.json
  fetch('./carreras.json')
    .then(res => res.json())
    .then(data => {
      // Filtrar coincidencias por nombre exacto de carrera
      const coincidencias = data.filter(c =>
        c.nombre_carrera.trim().toLowerCase() === nombre.trim().toLowerCase()
      );

      if (coincidencias.length === 0) {
        contenedorEnlaces.innerHTML = `<p class="text-muted">No se encontraron enlaces para esta carrera.</p>`;
      } else {
        coincidencias.forEach(item => {
          const link = document.createElement("a");
          link.href = item.enlace.trim();
          link.textContent = `${item.nombre_escuela} (${item.ubicacion})`;
          link.target = "_blank";
          link.rel = "noreferrer noopener";
          link.classList.add("enlace-carrera", "d-block", "mb-1"); // separa visualmente los enlaces y les da el color que defino en css
          contenedorEnlaces.appendChild(link);
        });
      }

      // Mostrar modal
      const modal = new bootstrap.Modal(document.getElementById('modalCarrera'));
      modal.show();
    });

    // Agrega listener para el botón "Ir al foro"
    const btnIrAlForo = document.getElementById('btnIrAlForo');

    // Elimina cualquier listener previo para evitar duplicados
    btnIrAlForo.replaceWith(btnIrAlForo.cloneNode(true));
    const nuevoBoton = document.getElementById('btnIrAlForo');

    //Cambia el texto del botón dependiendo de donde se acceda
    const estaEnForo = window.location.pathname.includes("foro-discusiones.html");
    nuevoBoton.textContent = estaEnForo ? "Ver en el foro" : "Ir al foro";

    nuevoBoton.addEventListener('click', () => {
    const isForoPage = window.location.pathname.includes("foro-discusiones.html");

  if (isForoPage) {
    // Estamos en foro → aplicar filtros y hacer scroll
    const careerFilter = document.getElementById('careerFilter');
    careerFilter.value = nombre;

    if ($(careerFilter).hasClass('selectpicker')) {
      $(careerFilter).selectpicker('refresh');
    }

    aplicarFiltros();

    const modal = bootstrap.Modal.getInstance(document.getElementById('modalCarrera'));
    modal.hide();

    setTimeout(() => {
      const comentarios = document.getElementById('list-comments');
      if (comentarios) {
        comentarios.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);

  } else {
    // Estamos en inicio → solo redirigir sin filtros
    window.location.href = 'foro-discusiones.html';
  }
});

}