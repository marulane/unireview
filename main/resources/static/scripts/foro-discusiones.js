let selectedRating = 0;
const listComments= document.getElementById("list-comments"); //Contenedor para comentarios
const btnPublicar = document.getElementById("btnPublicar"); //Botón publicar
const ratingValue = document.getElementById('rating-value'); //texto de valor de estrellas
const labelUserFullName = document.getElementById('labelUserFullName'); //Nombre completo de usuario
//Alerta
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");

//Campos de formulario
//const txtUser = document.getElementById("txtUser"); //Nombre de usuario
const schoolSelect = document.getElementById("schoolSelect");//Selección de escuela
const careerSelect = document.getElementById("careerSelect");//Selección de carrera
const userTypeSelect = document.getElementById("userTypeSelect"); //Selección de tipo de usuario
const txtComment = document.getElementById("txtComment"); //Comentario
const selectedTags = document.getElementById("selectedTags"); //Etiquetas seleccionadas
const txtEtiquetas = document.getElementById("txtEtiquetas"); //label de etiquetas
const charCounter = document.getElementById("charCounter")//contador de limite de caracteres en mensaje

//ETIQUETAS

const tags = document.querySelectorAll('.tag');
const selectedTagsInput = document.getElementById('selectedTags');
selectedTagsInput.value="";
//console.log(selectedTagsInput.value)

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('tag-selected'); //agrega la clase tag-selected para visualizarla en gris al ser presionada

    const selected = Array.from(tags)
      .filter(t => t.classList.contains('tag-selected')) //filtras todos los elementos que contengan la clase tag-selected
      .map(t => t.dataset.value); //obtienes el valor de la selección

    selectedTagsInput.value = selected.join(', '); //convierte el arreglo en un string, separado por coma , y un espacio
    //console.log(selectedTagsInput.value);
  });
});
//Llamada a modal-carrera.js
cargarModalCarrera();

//contador dinámico de caracteres
txtComment.addEventListener('input', () => {

  const longitud = txtComment.value.length;

  charCounter.innerText = `${longitud}/830`;

  if(longitud>=831){
    //txtComment.style.border="solid medium red"; //pone en rojo el borde si el comentario es menor a 15
    charCounter.style.color="red"; //pone en rojo el contador
  }else{
    charCounter.style.color="";
  }

});

// Al salir del campo de comentario, aplicar trim y actualizar contador
txtComment.addEventListener('blur', () => {
  txtComment.value = txtComment.value.trim();
  const longitud = txtComment.value.length;
  charCounter.innerText = `${longitud}/830`;

  if (longitud >= 831) {
    charCounter.style.color = "red";
  } else {
    charCounter.style.color = "";
  }
});

//Fecha actual
const isoDate = new Date().toISOString().split('T')[0];

//Colocando nombre de currentUser al inicio del formulario
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const userName = currentUser?.userName;
const userNameEmail = currentUser?.userEmail?.split("@")[0] || "";
let nameUser = "";

if (userName) {
  nameUser = `Comentando como ${userName}`;
} else {
  nameUser = "Inicia sesión para poder comentar";
}

labelUserFullName.innerText = nameUser;

//Funcionalidad de estrellas
const interactiveStars = document.querySelectorAll(".interactive-rating .star");

interactiveStars.forEach(star => {
  star.addEventListener("mouseover", function () {
    highlightStars(interactiveStars, this.dataset.value);
  });

  star.addEventListener("mouseout", function () {
    highlightStars(interactiveStars, selectedRating);
  });

  star.addEventListener("click", function () {
    //Convirtiendo el valor a numero ya que dataset guarda strings
    selectedRating = parseInt(this.dataset.value);
    ratingValue.style.color = "black";
    ratingValue.textContent = `Tu calificación: ${selectedRating}`; // Actualiza el texto dinámicamente
    // Puedes guardar o mostrarlo donde quieras
   // console.log("Seleccionaste: ", selectedRating);
  });
});

function highlightStars(stars, rating) {
  stars.forEach(star => {
    star.classList.remove("selected");
    if (parseInt(star.dataset.value) <= parseInt(rating)) {
      star.classList.add("selected");
    }
  });
}

//Array de todos los comentarios, iniciando por los 10 predefinidos
/* let allComments = [
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
}];// Array allComments */
let allComments;// Array allComments vacío

//Almacenando comentarios en el localStorage como cadena de texto
// if (!localStorage.getItem("comments")) {
//   localStorage.setItem("comments", JSON.stringify(allComments));
// }

//Mostrando localstorage en la página al cargarla
window.addEventListener("load", function(event){
  event.preventDefault();

  //si hay datos en local storage, asignalos al arreglo inicial
  if(this.localStorage.getItem("comments")!=null){
    //allComments = JSON.parse(this.localStorage.getItem("comments"));
  }
    
//-------------------------------------------------
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("/unireview/publicaciones/", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    //console.log(result);
    if(result!= ""){
      let results = JSON.parse(result).reverse();
      const carreraBuscada = localStorage.getItem("carreraBuscada")?.toLowerCase();
      
      allComments= results;
      mostrarTopCarreras();
      //--------
      
      



      let comentariosFiltrados = allComments;

      if (carreraBuscada) {
        comentariosFiltrados = allComments.filter(comment =>
          comment.carrera.carr_nombre.toLowerCase().includes(carreraBuscada)
        );
        for (let j = 0; j < comentariosFiltrados.length; j++) {
          renderComment(comentariosFiltrados[j]);
        }
      }else{
        //Ciclo for para recorrer e imprimir el array "allComments" usando la funcion renderComment
        for (let j = 0; j < results.length; j++) {
          renderComment(results[j]);
        }
      }

      

      // Opcional: limpiar carrera buscada después de mostrar
      //localStorage.removeItem("carreraBuscada");
      //-------
    }
    
  })
  .catch((error) => console.error(error));
//-------------------------------------------------
  
 
 

});//Window load

//RENDER COMMENT FUNCTION
function renderComment(comment,positionIndicator=0) {//positionIndicator, si es 0 se toma como beforend, si es 1 se toma como afterbegirn
  // Al renderizar las estrellas (convertir rating a número):
  //console.log(comment);
  const rating = parseInt(comment.publi_calificacion) || 0;
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    starsHTML += `<span class="star ${i <= rating ? 'selected' : ''}" data-value="${i}">&#9733;</span>`;
  }

  const etiquetasConHash = (comment.publi_etiqueta || '')
  .split(',')
  .map(etiqueta => `#${etiqueta.trim()}`)
  .join(' ');

let orderprint="beforeend";
if(positionIndicator==1){
  orderprint="afterbegin";
}
  listComments.insertAdjacentHTML (orderprint,`
    <div class="card mb-3 comentario-card tarjeta-resena">
      <div class="card-body comentario-contenido d-flex flex-column flex-md-row justify-content-between">
        <div class="d-flex flex-column flex-md-row">
          <img src="${comment.usuario.usu_foto_perfil}" class="rounded-circle mb-2 mb-md-0 me-md-3 perfil-comentario-img" alt="Foto de usuario" width="60" height="60" style="object-fit: cover;">
          <div>
            <div class="d-flex align-items-center gap-2 mb-2">
              <h4 class="card-title mb-0" style="line-height: 1;">${comment.usuario.usu_nombre} </h4>
              <p class="text-muted mb-0" style="line-height: 1;"> — ${comment.publi_tipo_usuario}</p>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">${comment.carrera.carr_nombre} / ${comment.escuela.esc_nombre}</h6>
            <div class="d-flex align-items-center mb-2">
              <h6 class="card-subtitle text-muted mb-0 me-2">${comment.publi_fecha}</h6>
              <div class="rating d-flex static-rating">
                ${starsHTML}
              </div>
            </div>
            <p class="card-text mb-0">${comment.publi_comentario}</p>
            <div class="mt-2">
             <span style="color: #fd6b4d">${etiquetasConHash}</span>
            </div>
          </div>
        </div>
      </div>
    </div>`);
}//renderComment

//ADD COMMENT
//Botón para agregar nuevos comentarios desde el formulario
btnPublicar.addEventListener("click", function(event){
  event.preventDefault();

  //Bandera, al ser true permite agregar los datos a la tabla
  let isValid=true;

  //Limpiando formatos de alerta e input
  schoolSelect.closest('.bootstrap-select').querySelector('.dropdown-toggle').classList.remove('is-invalid');
  careerSelect.closest('.bootstrap-select').querySelector('.dropdown-toggle').classList.remove('is-invalid');
  userTypeSelect.closest('.bootstrap-select').querySelector('.dropdown-toggle').classList.remove('is-invalid');
  txtComment.style.border=""; //sin estilo para comentario
  txtEtiquetas.style.color=""; //sin estilo para label de etiquetas
  //txtUser.style.border=""; //sin estilo para usuario

  const validarUsuario = new RegExp("^[a-zA-Z0-9.-]{8,20}$"); //limitacion que debe de tener el nombre de usuario

  alertValidacionesTexto.innerHTML="" //sin mensaje
  alertValidaciones.style.display="none";  //oculto

  txtComment.value = txtComment.value.trim(); //quita espacios vacios al inicio y al final del comentario
  charCounter.innerText = `${txtComment.value.trim().length}/830`; //Reseteando contador
  //txtUser.value = txtUser.value.trim(); //quita espacios vacios al inicio y al final del nombre de usuario, ES TEMPORAL

  //Validaciones

  //Si todos los campos están vacíos a la vez

  if(nameUser==="Inicia sesión para poder comentar"){
    isValid = false;
    Swal.fire({
      title: "¡Oh no!",

      html: `
        <p>Necesitas iniciar sesión para poder comentar.</p>
        <p>Queremos saber tu experiencia, pero primero dirígete a la página de inicio de sesión.</p>
      `,
      imageUrl: "../assets/think.svg",
      imageWidth: 300,
      imageHeight: 190,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Iniciar Sesión",
      reverseButtons: true,
      confirmButtonColor: "#EB5A3C",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "./inicio-sesion.html";
      }
    });
}

  if (
  !schoolSelect.value.trim() &&
  !careerSelect.value.trim() &&
  selectedRating === 0 &&
  !txtComment.value.trim() &&
  (!userTypeSelect.value || userTypeSelect.value === "Selecciona una opción") &&
  !selectedTagsInput.value.trim()
){
   // console.log("entro a condición")
      txtComment.style.border = "solid medium red";
      schoolSelect.closest('.bootstrap-select').classList.add('is-invalid');
      careerSelect.closest('.bootstrap-select').classList.add('is-invalid');
      userTypeSelect.closest('.bootstrap-select').classList.add('is-invalid');
      ratingValue.style.color = "red";
      txtEtiquetas.style.color = "red";
      alertValidacionesTexto.innerHTML = "<strong>Todos los campos son requeridos.</strong><br/>";
      alertValidaciones.style.display = "block";
      isValid = false;
      return; // ← IMPORTANTE: detiene la ejecución
  }

  

  // if(!validarUsuario.test(txtUser.value)){ //valida que el usuario cumpla parametros de 8-20 carcateres, puede utilizar numeros y/o guiones, puntos.
  //   txtUser.style.border = "solid medium red";
  //   alertValidacionesTexto.innerHTML +="<strong> El nombre de usuario debe tener entre 8-20 caracteres, y puede incluir números, así como los caracteres punto (.) y/o guion (-). </strong><br/>";
  //   alertValidaciones.style.display="block";
  //   isValid=false;
  // }

  if(schoolSelect.value === ""){ //valida que el campo de escuela tenga una selección.
    schoolSelect.closest('.bootstrap-select').classList.add('is-invalid');
    alertValidacionesTexto.innerHTML +="<strong> Selecciona una opción válida para Escuela. </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }else{
    // Si el valor es válido, eliminamos la clase is-invalid
    schoolSelect.closest('.bootstrap-select').classList.remove('is-invalid');
  }
  

  if(careerSelect.value === ""){//el campo de carrera debe tener selección
    careerSelect.closest('.bootstrap-select').classList.add('is-invalid');
    alertValidacionesTexto.innerHTML +="<strong> Selecciona una opción válida para Carrera. </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }else{
    // Si el valor es válido, eliminamos la clase is-invalid
    careerSelect.closest('.bootstrap-select').classList.remove('is-invalid');
  }

  if(!userTypeSelect.value || userTypeSelect.value === "Selecciona una opción"){//el campo de tipo de usuario debe tener selección
    userTypeSelect.closest('.bootstrap-select').classList.add('is-invalid');
    alertValidacionesTexto.innerHTML +="<strong> Selecciona una opción válida para tu relación académica. </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }else{
    // Si el valor es válido, eliminamos la clase is-invalid
    userTypeSelect.closest('.bootstrap-select').classList.remove('is-invalid');
  }

  if(selectedRating == 0){ // si no contiene una calificacion, cambia el texto y lo pone en rojo
    ratingValue.textContent = "No hay calificación";
    ratingValue.style.color="red";
    alertValidacionesTexto.innerHTML +="<strong> No se ingresó una calificación. </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }

  if(txtComment.value.length < 15 || txtComment.value.length > 830){ //el comentariodebe de tener minimo 15 caracteres para ser enviado
    txtComment.style.border = "solid medium red";
    charCounter.style.color="red";
    alertValidacionesTexto.innerHTML +="<strong> Tu comentario debe de tener de 15 a 830 caracteres. </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }else{
    charCounter.style.color="";
  }

  if(!selectedTagsInput.value.trim()){
    txtEtiquetas.style.color= "red";
    alertValidacionesTexto.innerHTML +="<strong> Selecciona al menos una etiqueta. </strong><br/>";
    alertValidaciones.style.display="block";
  }

  if(isValid){

    let elemento =  { //Creando OBJETO con notación JSON (clave, valor)
                        "username" : userNameEmail,
                        "img" : currentUser.userPP,
                        "career" : careerSelect.value,
                        "school" : schoolSelect.value,
                        "userType" : userTypeSelect.value,
                        "stars" : selectedRating,
                        "message" : txtComment.value,
                        "tags" : selectedTagsInput.value || '',
                        "date": isoDate
                    };
    //Agregando el objeto al inicio del array
    //allComments.unshift(elemento);
    //Recargando el array actualizado al local storage
    //localStorage.setItem("comments", JSON.stringify(allComments));
    //----------------------------------------------------------------
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("accessToken").replace(/"/g, '')}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "publi_comentario": elemento.message,
      "publi_fecha": elemento.date,
      "publi_calificacion": elemento.stars,
      "publi_etiqueta": elemento.tags,
      "publi_tipo_usuario": elemento.userType,
      "usuario": {
        "idusuario": JSON.parse(localStorage.getItem("currentUser")).idusuario,
        "usu_foto_perfil": currentUser.userPP,
        "usu_nombre": elemento.username,
      },
      "escuela": {
        "idescuela": elemento.school,
        "esc_nombre":schoolSelect.options[schoolSelect.selectedIndex].text,

      },
      "carrera": {
        "idcarrera": elemento.career,
        "carr_nombre":careerSelect.options[careerSelect.selectedIndex].text,
      }
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/unireview/publicaciones/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        //console.log(result);
        //console.log(elemento);
        // Renderiza el nuevo comentario
        console.log(raw);
        renderComment(JSON.parse(raw),1);

        //Alerta -> Se subio publicacion 
        Swal.fire({
          title: "¡Bien!",
          text: "Tu opinión ha sido publicada",
          imageUrl: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2tpdnZ5NXZ6dGF5dzFka296emk2OGd3ZDZrM3NmYmdhbW94NTVnayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10uJ0IFxlCA06I/giphy.gif",
          imageWidth: 240,
          imageHeight: 168,
          imageAlt: "Custom image",
          confirmButtonColor: "#EB5A3C"
        }).then(() => {
            listComments.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        });

        //Limpia los campos después de agregarlos a la tabla
        //txtUser.value="";
        //Elimina visualmente los valores
        $('#schoolSelect').selectpicker('val', '');
        $('#careerSelect').selectpicker('val', '');
        txtComment.value="";
        charCounter.innerText = `${txtComment.value.trim().length}/830`;
        ratingValue.textContent = `Tu calificación: 0`;

        // Elimina clase 'selected' de todas las estrellas
        interactiveStars.forEach(star => {
        star.classList.remove("selected");
        star.style.color = ""; // Limpia estilos inline si los hay
        });
        //Actualiza el top carreras tomando en cuenta al último comentario
        mostrarTopCarreras();
      })
      .catch((error) => console.error(error));
    //----------------------------------------------------------------
  }
});

function mostrarTopCarreras() {
  // Leer comentarios directamente del localStorage
  const comentariosGuardados = allComments;
  //console.log(allComments);
  // Ordenar por estrellas de mayor a menor
  const ordenadas = [...comentariosGuardados].sort((a, b) => b.publi_calificacion - a.publi_calificacion);
  //console.log(ordenadas);
  //  Se crea un Set para evitar repetir carreras con el mismo nombre
  const carrerasUnicas = new Set();
  const topCarreras = [];

  for (let carrera of ordenadas) {
    console.log(carrera);
    const nombre = carrera.carrera.carr_nombre.trim();
    if (!carrerasUnicas.has(nombre)) {
      carrerasUnicas.add(nombre);
      topCarreras.push(nombre);
    }
    if (topCarreras.length === 10) break;
  }

  const lista = document.getElementById("listaCarreras");
  lista.innerHTML = ""; // Limpiar si ya hay contenido

  //Para acceder a su tamaño después
  const resumenCarreras = {};


  //Calculando promedio de carreras y mostrándolo en orden ascendente
topCarreras.forEach((carrera) => {
  const comentariosCarrera = comentariosGuardados.filter(
    c => c.carrera.carr_nombre.trim() === carrera
  );

  const cantidad = comentariosCarrera.length;
  const promedio = (
    comentariosCarrera.reduce((acc, curr) => acc + curr.publi_calificacion, 0) / cantidad
  ).toFixed(1);

  resumenCarreras[carrera] = {
    promedio,
    cantidad
  };

  lista.insertAdjacentHTML(
    "beforeend",
    `<li style="line-height: 1.8; margin-bottom: 6px;">
       <button class="btnListaCarreras" 
               data-carrera="${carrera}" 
               data-promedio="${promedio}"
               data-cantidad-eval="${cantidad}">
               ${carrera} <!-- Lo que muestra el botón -->
       </button>
     </li>`
  );
});

  document.querySelectorAll('.btnListaCarreras').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita comportamiento predeterminado
    e.stopPropagation(); // Evita que otros listeners reaccionen

    const nombre = btn.dataset.carrera;
    const promedio = btn.dataset.promedio;
    const numEvaluaciones = btn.dataset.cantidadEval;
    mostrarModalCarrera({
      nombre,
      promedio,
      numEvaluaciones,
      urlDetalles: "https://ejemplo.com/carrera/mecatronica",
      urlResenas: "https://ejemplo.com/resenas/mecatronica"
    });
  });
});

}

//document.addEventListener("DOMContentLoaded", );


/* window.addEventListener("load", function(event){
  
}); */


function mostrarComentariosFiltrados() {
  const comentariosFiltrados = JSON.parse(localStorage.getItem("filteredComments") || "[]");

  if (comentariosFiltrados.length > 0) {
    const titulo = localStorage.getItem("searchedCareer") || "";
    document.getElementById("tituloCarrera").textContent = `Resultados para: ${titulo}`;

    const contenedorTop4 = document.getElementById("top4Cards");
    contenedorTop4.innerHTML = "";

    comentariosFiltrados.forEach(comment => {
      const starsHTML = Array.from({ length: 5 }, (_, i) => {
        return `<span class="star ${i < comment.stars ? 'selected' : ''}" data-value="${i + 1}">&#9733;</span>`;
      }).join("");

      const cardHTML = `
        <div class="col">
          <div class="card-section">
            <div class="card-body">
              <div class="interactive-rating">
                ${starsHTML}
              </div>
              <h5 class="card-title">${comment.career}</h5>
              <p class="card-text">${comment.message.length > 150 ? comment.message.substring(0, 150) + '...' : comment.message}</p>
            </div>
            <div class="card-footer d-flex align-items-center">
              <img src="${comment.img}" class="rounded-circle me-2" alt="${comment.username}" width="40" height="40">
              <div>
                <small class="text-muted">${comment.username}</small><br>
                <small class="text-muted">${comment.date}</small>
              </div>
            </div>
          </div>
        </div>
      `;

      contenedorTop4.insertAdjacentHTML("beforeend", cardHTML);
    });
  } else {
    mostrarTop4Cards(); // si no hay filtro, mostrar top 4
  }
}


