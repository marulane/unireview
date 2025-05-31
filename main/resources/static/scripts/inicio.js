//Array de todos los comentarios, iniciando por los 10 predefinidos
let allComments = [
  //Objeto 1
{
  'username': 'Itzel.Annet',
  'img': './assets/profile-pictures/user-3.webp',
  'career': 'Ing. Telemática',
  'school' : 'Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional',
  "userType" : 'Egresada/o',
  'stars': 3,
  'message': 'La carrera puede resultar demandante, ya que abarca una amplia variedad de temas relacionados con las telecomunicaciones. Entre ellos se encuentran el estudio de señales AM y FM, antenas, conexión de redes y los distintos protocolos de Internet. Además, se incluyen asignaturas de programación, siempre orientadas al ámbito de las telecomunicaciones. Es importante mencionar que las matemáticas tienen un papel fundamental a lo largo de los cinco años de estudio, por lo que, si no existe afinidad por esta área, podría no ser la opción más adecuada. Asimismo, el conocimiento del idioma inglés representa una herramienta valiosa, ya que gran parte de los libros y referencias técnicas se encuentran en este idioma. Comprenderlo facilita el aprendizaje y la comprensión de los conceptos relacionados con las telecomunicaciones.',
  'tags' : 'Retícula, Dificultad',
  'date': '2025-03-25'
},
//Objeto 2
{
  'username': 'Maru.97',
  'img': './assets/profile-pictures/user-2.webp',
  'career': 'Ing. Tecnologías de la Información y Comunicaciones',
  'school': 'Instituto Tecnológico de Reynosa',
  "userType" : 'Egresada/o',
  'stars': 4,
  'message': 'Mi experiencia estudiando Ing. TICs en el Tec de Reynosa fue buena en general, el temario fue completo, se vieron temas desde programación, soporte técnico y fundamentos de redes. Lo único a considerar es la asistencia de los profesores y la atención individual que brindan, ya que la mayoría no cuenta con la apertura para salirse del temario para explicar otras dudas técnicas que no forman parte del plan de retícula.',
  'tags' : 'Retícula, Atención, Profesores',
  'date': '2025-04-29'
},
//Objeto 3
{
  'username': 'Samantha9705',
  'img': './assets/profile-pictures/user-5.webp',
  'career': 'Lic. Comunicación y Periodismo',
  'school': 'Universidad Nacional Autónoma de México',
  "userType" : 'Egresada/o',
  'stars': 2,
  'message': 'La ubicación de Fes Aragón no es la mejor, pero tiene el plan de estudios más actualizado del área. Los primeros semestres son de teoría, pero en su mayoría la carrera es muy práctica. Antes de titularse, tienes la opción de elegir el área profesional que quieres (prensa, radio, tv). Si eres sociable y te gusta saber de todo un poco, la recomiendo 100%. ¡También diría que es una carrera que necesita amor a la profesión, si solo te llama un poco la atención, piensa dos veces tu decisión! ',
  'tags' : 'Retícula, Ubicación, Tips/Consejos',
  'date': '2025-03-18'
},
//Objeto 4
{
  'username': 'Diego.Angeles3',
  'img': './assets/profile-pictures/user-1.webp',
  'career': 'Lic. Arquitectura',
  'school': 'Universidad Nacional Autónoma de México',
  "userType" : 'Alumna/o',
  'stars': 4,
  'message': 'La carrera de arquitectura es muy buena, si te gusta la parte de las matemáticas, el diseño, los materiales, la creatividad y sobre todo un compromiso social. La arquitectura te da las herramientas para  crear espacios con un sentido de pertenencia y buscar las opciones más óptimas para hacerlo realidad.',
  'tags' : 'Experiencia personal',
  'date': '2025-03-03'
},
//Objeto 5
{
  'username': 'Keny.Gtz',
  'img': './assets/profile-pictures/user-9.webp',
  'career': 'Ing. Tecnologías de la Información y Comunicaciones',
  'school' : 'Instituto Tecnológico de Tláhuac',
  "userType" : 'Egresada/o',
  'stars': 4,
  'message': 'La carrera es buena, pues a lo largo de mi formación, el temario fue concreto. La experiencia fue muy enriquecedora porque te enfocan a desarrollar diferentes habilidades, aplicar conocimientos en problemas planteados de casos reales.',
  'tags' : 'Retícula, Experiencia personal',
  'date': '2025-02-22'
},
//Objeto 6
{
  'username': 'Joshua.Mendez',
  'img': './assets/profile-pictures/user-4.webp',
  'career': 'Lic. Educación Física',
  'school' : 'Escuela Superior de Educación Física',
  "userType" : 'Aspirante a nuevo ingreso',
  'stars': 4,
  'message': 'Es una carrera enfocada en la formación integral de docentes especializados en el movimiento humano, con énfasis en la enseñanza de la actividad física, el deporte y la promoción de estilos de vida saludable, esta licenciatura está dirigida a personas con vocación educativa y gusto por el deporte, trabajo en equipo y promoción del bienestar físico y emocional.',
  'tags' : 'Experiencia personal',
  'date': '2025-02-18'
},
//Objeto 7
{
  'username': 'Raul.ramirez',
  'img': './assets/profile-pictures/user-6.webp',
  'career': 'Ing. Mecatrónica',
  'school' : 'Universidad Tecmilenio',
  "userType" : 'Egresada/o',
  'stars': 4,
  'message': 'La carrera es muy buena, y las instalaciones que proporciona la universidad para ello, en ocasiones, son malas. Algunas partes de los laboratorios son inservibles, nunca llegué a usarlos en los 4 años que estudié ahí. Algunos profesores eran muy buenos y se les notaba que les gustaba enseñar, unos otros solo estaban ahí por compromiso y en ocasiones pareciese que no sabían lo que explicaban. Sí, recomiendo la carrera, más no la universidad.',
  'tags' : 'Instalaciones, Profesores, Experiencia personal',
  'date': '2025-02-15'
},
//Objeto 8
{
  'username': 'Jennifer.gonzalez',
  'img': './assets/profile-pictures/user-10.webp',
  'career': 'Ing. Mecatrónica',
  'school' : 'Instituto Tecnológico de Puebla',
  "userType" : 'Exalumna/o (estudios inconclusos)',
  'stars': 5,
  'message': 'Mi experiencia en mecatrónica fue buena, los maestros están bien preparados y el temario fue lo que esperaba, lo malo es que solo tienes oportunidad de recursar dos materias a la vez por lo que se debe tener en cuenta si por tema de tiempos o trabajo no puedes llevar ese ritmo de estudio, ya que al igual las materias se aprueban con un mínimo de 8.',
  'tags' : 'Retícula, Dificultad, Profesores',
  'date': '2025-02-12'
},
//Objeto 9
{
  'username': 'hugo970500',
  'img': './assets/profile-pictures/user-7.webp',
  'career': 'Lic. Psicología Clínica',
  'school': 'Centro de Enseñanza Técnica y Superior',
  "userType" : 'Egresada/o',
  'stars': 3,
  'message': 'La carrera es muy teórica, el plan de estudios es bueno pero desactualizado.  Fuera de eso, las instalaciones de la universidad son muy buenas, hay oportunidades de poder desarrollarte profesionalmente. Hay que tener en cuenta que la sede de la institución está en Toluca.',
  'tags' : 'Ubicación, Instalaciones',
  'date': '2025-02-03'
},
//Objeto 10
{
  'username': 'Mar1392',
  'img': './assets/profile-pictures/user-8.webp',
  'career': 'Ing. En Sistemas Computacionales',
  'school' : 'Universidad Autónoma de Aguascalientes (UAA)',
  "userType" : 'Alumna/o',
  'stars': 4,
  'message': 'La carrera es buena, hay profesores preparados. Es recomendable que tengas carrera técnica en algo similar a sistemas o aprender lo básico antes para que no te sientas desorientado al inicio. La carrera se siente pesada, son 9 semestres, pero vale la pena. Te puedes titular con un proyecto.',
  'tags' : 'Dificultad, Profesores, Tips/Consejos',
  'date': '2025-01-28'
}];// Array allComments

//Almacenando comentarios en el localStorage como cadena de texto
/* if (!localStorage.getItem("comments")) {
  localStorage.setItem("comments", JSON.stringify(allComments));
} */

let inicioCarreras;
//Cargando las carreras 
  $(document).ready(function () {
    const careerSelect = $('#careerSelect');
     // ----------------------------
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
//http://localhost:8080
    fetch("/unireview/carreras/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        inicioCarreras = data;
        //console.log(data);
          careerSelect.empty();
          careerSelect.append('<option value="" selected disabled>Selecciona tu carrera</option>');
          const carrerasAgregadas = new Set();
          // Ordenar por nombre de carrera
          data
            .filter(item => item.carr_nombre) // ignorar entradas vacías
            .sort((a, b) => a.carr_nombre.localeCompare(b.carr_nombre, 'es', { sensitivity: 'base' }))
            .forEach(item => {
              if (!carrerasAgregadas.has(item.carr_nombre)) {
                careerSelect.append(new Option(item.carr_nombre, item.carr_nombre));
                carrerasAgregadas.add(item.carr_nombre);
              }
            });

          careerSelect.selectpicker('destroy');
          careerSelect.selectpicker();

      })
      .catch((error) => console.error(error)); 
         //-----------------------------original>
//  $.getJSON('carreras.json', function (data) {
//           careerSelect.empty();
//           careerSelect.append('<option value="" selected disabled>Selecciona tu carrera</option>');

//           const carrerasAgregadas = new Set();

//           // Ordenar por nombre de carrera
//           data
//             .filter(item => item.nombre_carrera) // ignorar entradas vacías
//             .sort((a, b) => a.nombre_carrera.localeCompare(b.nombre_carrera, 'es', { sensitivity: 'base' }))
//             .forEach(item => {
//               if (!carrerasAgregadas.has(item.nombre_carrera)) {
//                 careerSelect.append(new Option(item.nombre_carrera, item.nombre_carrera));
//                 carrerasAgregadas.add(item.nombre_carrera);
//               }
//             });

//           careerSelect.selectpicker('destroy');
//           careerSelect.selectpicker();
//         }); 
        //------------------------------ 
  });

const total = 4; // cantidad de tarjetas
  let current = 1;

  setInterval(() => {
    document.getElementById('c' + current).checked = true;
    current++;
    if (current > total) current = 1;
  }, 3000); // cambia cada 3 segundos

  function mostrarTop4Cards() {
     if (!document.getElementById("top4CardsStyle")) {
    const style = document.createElement("style");
    style.id = "top4CardsStyle";
    style.textContent = `
      #top4Cards {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
        padding: 20px 0;
      }

      .card-section {
        background-color: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        padding: 16px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .card-section:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .interactive-rating {
        font-size: 22px;
        margin-bottom: 12px;
      }

      .star {
        color: #ccc;
        cursor: default;
      }

      .star.selected {
        color: #FFD700;
      }

      .card-title {
        font-weight: bold;
        margin-bottom: 8px;
      }

      .card-text {
        font-size: 0.95rem;
        color: #444;
      }

      .card-footer {
        border-top: 1px solid #eee;
        margin-top: 16px;
        padding-top: 12px;
        background-color: transparent;
      }

      .card-footer img {
        object-fit: cover;
        border: 2px solid #ddd;
      }

      #top4Cards .col {
        flex: 1 1 calc(25% - 16px);
        max-width: calc(25% - 16px);
      }

      @media (max-width: 992px) {
        #top4Cards .col {
          flex: 1 1 calc(50% - 16px);
          max-width: calc(50% - 16px);
        }
      }

      @media (max-width: 576px) {
        #top4Cards .col {
          flex: 1 1 100%;
          max-width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
  }
  const contenedorTop4 = document.getElementById("top4Cards");
  contenedorTop4.innerHTML = ""; // Limpiar antes de volver a insertar

  //---------------------------con fetch}

   const requestOptions = {
  method: "GET",
  redirect: "follow"
  };
//http://localhost:808
fetch("/unireview/publicaciones/filter/publisDestacadas", requestOptions)
  .then((response) => response.text())
  .then((result) => { 
    const comentarios = JSON.parse(result);

    const top4 = comentarios
    .sort((a, b) => b.publi_calificacion - a.publi_calificacion)
    .slice(0, 4); // solo los 4 primeros

  top4.forEach(comment => {
    const starsHTML = Array.from({ length: 5 }, (_, i) => {
      return `<span class="star ${i < comment.publi_calificacion ? 'selected' : ''}" data-value="${i + 1}">&#9733;</span>`;
    }).join("");

    const cardHTML = `

      <div class="col">
        <div class="card-section">
          <div class="card-body">
            <div class="interactive-rating">
              ${starsHTML}
            </div>
            <h5 class="card-title">${comment.carrera.carr_nombre}</h5>
            <p class="card-text">${comment.publi_comentario.length > 150 ? comment.publi_comentario.substring(0, 150) + '...' : comment.publi_comentario}</p>
          </div>
          <div class="card-footer d-flex align-items-center">
            <img src="${comment.usuario.usu_foto_perfil}" class="rounded-circle me-2" alt="${comment.usuario.usu_email}" width="40" height="40">
            <div>
              <small class="text-muted">${comment.usuario.usu_nombre}</small><br>
              <small class="text-muted">${comment.publi_fecha}</small>
            </div>
          </div>
        </div>
      </div>
    `;

    contenedorTop4.insertAdjacentHTML("beforeend", cardHTML);
  });

  })
  .catch((error) => console.error(error)); 

  //-----------------------------

  // Obtener y ordenar los comentarios por calificación
  //  const comentarios = JSON.parse(localStorage.getItem("comments") || "[]");

  // const top4 = comentarios
  //   .sort((a, b) => b.stars - a.stars)
  //   .slice(0, 4); // solo los 4 primeros

  // top4.forEach(comment => {
  //   const starsHTML = Array.from({ length: 5 }, (_, i) => {
  //     return `<span class="star ${i < comment.stars ? 'selected' : ''}" data-value="${i + 1}">&#9733;</span>`;
  //   }).join("");

  //   const cardHTML = `

  //     <div class="col">
  //       <div class="card-section">
  //         <div class="card-body">
  //           <div class="interactive-rating">
  //             ${starsHTML}
  //           </div>
  //           <h5 class="card-title">${comment.career}</h5>
  //           <p class="card-text">${comment.message.length > 150 ? comment.message.substring(0, 150) + '...' : comment.message}</p>
  //         </div>
  //         <div class="card-footer d-flex align-items-center">
  //           <img src="${comment.img}" class="rounded-circle me-2" alt="${comment.username}" width="40" height="40">
  //           <div>
  //             <small class="text-muted">${comment.username}</small><br>
  //             <small class="text-muted">${comment.date}</small>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   `;

  //   contenedorTop4.insertAdjacentHTML("beforeend", cardHTML);
  // }); 
}
document.addEventListener("DOMContentLoaded", () => {
  mostrarTop4Cards();
  //console.log("entro");
});

const careerSelect = document.getElementById("careerSelect");

document.getElementById("btnBuscar").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  const careerSelect = document.getElementById("careerSelect"); // Asegúrate de que exista
  const nombreCarrera = careerSelect.value;

  if (!nombreCarrera) {
    Swal.fire({
      //icon: 'warning',
      title: 'Selecciona una carrera',
      text: 'Por favor selecciona una carrera para ver más información.',
      imageUrl: "../assets/think.svg",
      imageWidth: 300,
      imageHeight: 190,
      confirmButtonColor: '#EB5A3C'
    });
    return;
  }

  let comentarios;
  //-------------------------
  const requestOptions = {
  method: "GET",
  redirect: "follow"
};
//http://localhost:8080
fetch("/unireview/publicaciones/", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    //console.log(result);
    if(result!= ""){
      comentarios = JSON.parse(result);
    }
    const comentariosCarrera = comentarios.filter(c =>
    c.carrera.carr_nombre.trim().toLowerCase() === nombreCarrera.trim().toLowerCase()
  );

  const cantidad = comentariosCarrera.length;

  if (cantidad === 0) {
    Swal.fire({
      title: 'Sin evaluaciones',
      text: 'Aún no hay reseñas para esta carrera.',
      imageUrl: "../assets/sad.svg",
      imageWidth: 300,
      imageHeight: 190,
      confirmButtonColor: '#EB5A3C'
    });
    return;
  }

  const suma = comentariosCarrera.reduce((acc, curr) => acc + curr.publi_calificacion, 0);
  const promedio = (suma / cantidad).toFixed(1);

  cargarModalCarrera(() => {
    setTimeout(() => {
      mostrarModalCarrera({
        nombre: nombreCarrera,        // ← aquí el cambio
        promedio,
        numEvaluaciones: cantidad     // ← este nombre también es importante
      });
    }, 100);
  });
  })
  .catch((error) => console.error(error));
  //-------------------------

  
});


  // const inputCarrera = document.getElementById("inputB").value.trim().toLowerCase();
  // const comentarios = JSON.parse(localStorage.getItem("comments") || "[]");
  // console.log("Comentarios recuperados:", comentarios);

  // // Filtrar comentarios por coincidencia exacta o parcial de carrera
  // const comentariosFiltrados = comentarios.filter(c =>
  //   c.career.toLowerCase().includes(inputCarrera)
  // );

  // // Guardar resultados para usarlos en foro.html
  // localStorage.setItem("filteredComments", JSON.stringify(comentariosFiltrados));

  // // Opcional: guardar la carrera buscada para mostrarla como título
  // localStorage.setItem("searchedCareer", inputCarrera);

  // // Redirigir a foro de discusión
  // window.location.href = "foro-discusiones.html";