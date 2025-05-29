//leer archivo json de universidades

  $(document).ready(function () {
    const select = $('#schoolSelect');

    if (select.data('loaded')) return; // evitar ejecución doble

    $.getJSON('instituciones_anuies.json', function (data) {
      //console.log("Universidades cargadas:", data.length);

      select.empty(); // elimina todas las opciones
      select.append('<option value="" selected disabled>Selecciona tu universidad</option>'); // reinsertar la opción inicial

      const nombresAgregados = new Set(); // para evitar duplicados
      data.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
      data.forEach(item => {
        if (!nombresAgregados.has(item.nombre)) {
          select.append(new Option(item.nombre, item.nombre));
          nombresAgregados.add(item.nombre);
        }
      });

      select.selectpicker('destroy');
      select.selectpicker();
      select.data('loaded', true); // marca como cargado
    });
  });

//Cargando las carreras de carreras.json
  $(document).ready(function () {
    const careerSelect = $('#careerSelect');

    $.getJSON('carreras.json', function (data) {
      careerSelect.empty();
      careerSelect.append('<option value="" selected disabled>Selecciona tu carrera</option>');

      const carrerasAgregadas = new Set();

      // Ordenar por nombre de carrera
      data
        .filter(item => item.nombre_carrera) // ignorar entradas vacías
        .sort((a, b) => a.nombre_carrera.localeCompare(b.nombre_carrera, 'es', { sensitivity: 'base' }))
        .forEach(item => {
          if (!carrerasAgregadas.has(item.nombre_carrera)) {
            careerSelect.append(new Option(item.nombre_carrera, item.nombre_carrera));
            carrerasAgregadas.add(item.nombre_carrera);
          }
        });

      careerSelect.selectpicker('destroy');
      careerSelect.selectpicker();
    });
  });

//Cargar filtros de búsqueda desde localStorage
function cargarFiltrosDesdeLocalStorage() {
//Cargando los datos del localStorage
  const data = JSON.parse(localStorage.getItem("comments") || "[]");

  //Creando sets para que los valores no se repitan
  const careersOptions = new Set();
  const schoolsOptions = new Set();
  const orderOptions = new Set();
  const starsOptions = new Set();
  

  data.forEach(comment => {
    //Agregando a los sets el valor obtenido de localstorage si existe
    if (comment.career) careersOptions.add(comment.career.trim());
    if (comment.school) schoolsOptions.add(comment.school.trim());
    if (comment.stars) starsOptions.add(comment.stars);
    if (comment.orderOptions) orderOptions.add(comment.date);
  });

  const careerFilter = document.getElementById("careerFilter");
  const schoolFilter = document.getElementById("schoolFilter");
  const orderFilter = document.getElementById("orderFilter");
  const ratingFilter = document.getElementById("ratingFilter");

  careerFilter.innerHTML = '<option value="default">Todas las carreras</option>';
  schoolFilter.innerHTML = '<option value="default">Todas las universidades</option>';
  orderFilter.innerHTML = `<option value="default">Selecciona el orden</option>
                          <option value="asc">Más antiguos primero</option>
                          <option value="desc">Más recientes primero</option>`;
  ratingFilter.innerHTML = '<option value="default">Todas las calificaciones</option>';

  // Ordenar alfabéticamente
  //Métodos como .sort() o .map() solo están disponibles para arrays, no para Set, por eso usamos un operador de propagación, 
  // para primero convertirlo en un array .
  [...careersOptions]
    // Se ordena alfabéticamente como si todo estuviera en minúsculas y sin acentos.
    .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
    .forEach(c => {
      careerFilter.insertAdjacentHTML("beforeend", `<option value="${c}">${c}</option>`);
    });

  [...schoolsOptions]
    // Se ordena alfabéticamente como si todo estuviera en minúsculas y sin acentos.
    .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
    .forEach(s => {
      schoolFilter.insertAdjacentHTML("beforeend", `<option value="${s}">${s}</option>`);
    });

  // [...orderOptions]
  //   // Se ordena en orden descendente por defecto
  //   .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
  //   .forEach(l => {
  //     orderFilter.insertAdjacentHTML("beforeend", `<option value="${l}">${l}</option>`);
  //   });

  // Ordenar estrellas de mayor a menor
  [...starsOptions]
  //Para números (a, b) => a - b (ascendente) o b - a (descendente)
    .sort((a, b) => b - a)
    .forEach(r => {
      ratingFilter.insertAdjacentHTML("beforeend", `<option value="${r}">${r} estrellas</option>`);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarFiltrosDesdeLocalStorage();

  // Agrega listeners una vez que el DOM está listo
  document.getElementById("careerFilter").addEventListener("change", aplicarFiltros);
  document.getElementById("schoolFilter").addEventListener("change", aplicarFiltros);
  document.getElementById("orderFilter").addEventListener("change", aplicarFiltros);
  document.getElementById("ratingFilter").addEventListener("change", aplicarFiltros);
});

//const listComments= document.getElementById("list-comments"); //Contenedor para comentarios

function aplicarFiltros() {
  const careerValue = document.getElementById("careerFilter").value;
  const schoolValue = document.getElementById("schoolFilter").value;
  const orderValue = document.getElementById("orderFilter").value;
  const ratingValue = document.getElementById("ratingFilter").value;

  // Limpia comentarios previos
  listComments.innerHTML = "";

//Accediendo al arreglo allComents el cual es global mientras no esté definido dentro de una función
//está definido en foro-discusion.js y contiene el contenido del local storage en notación JSON
  const comentariosFiltrados = allComments.filter(comment => {
    return (careerValue === "default" || comment.career === careerValue) &&
           (schoolValue === "default" || comment.school === schoolValue) &&
           (ratingValue === "default" || comment.stars == ratingValue);
  });

  
     // Ordenar por fecha si se eligió ascendente o descendente
    if (orderValue === "asc") {
        comentariosFiltrados.sort((a, b) => new Date(a.date) - new Date(b.date));
    }else if (orderValue === "desc") {
        comentariosFiltrados.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

  // Renderiza los comentarios que sí coinciden
  comentariosFiltrados.forEach(comment => renderComment(comment));
}

//Limpiando filtros con boton de trash
document.getElementById("btnResetFilters").addEventListener("click", () => {
  // Reinicia cada select a "default"
  ["careerFilter", "schoolFilter", "orderFilter", "ratingFilter"].forEach(id => {
    const select = document.getElementById(id);
    if (select) {
      select.value = "default";
      // Si usas Bootstrap Select:
      if ($(select).hasClass("selectpicker")) {
        $(select).selectpicker("refresh");
      }
    }
  });

  // Vuelve a cargar opciones completas desde localStorage
  cargarFiltrosDesdeLocalStorage();

  // Vuelve a renderizar todos los comentarios
  listComments.innerHTML = "";
  allComments.forEach(comment => renderComment(comment));
});


