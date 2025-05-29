const txtDatosUsuario = document.getElementById("datos-usuario");
const tablaDatos = document.getElementById("tabla-datos");
const fotoPerfil = document.getElementById("fotoPerfil");

const alertValidacionesNombre = document.getElementById("alertValidacionesNombre");
const alertValidacionesTextoNombre = document.getElementById("alertValidacionesTextoNombre");

const alertValidacionesTel = document.getElementById("alertValidacionesTel");
const alertValidacionesTextoTel = document.getElementById("alertValidacionesTextoTel");

const alertValidacionesFechaNacimiento = document.getElementById("alertValidacionesFechaNacimiento");
const alertValidacionesTextoFechaNacimiento = document.getElementById("alertValidacionesTextoFechaNacimiento");

//Botones
const btnEditarNombre = document.getElementById("btnEditarNombre");
const btnGuardarNombre = document.getElementById("btnGuardarNombre");
const btnCancelarNombre = document.getElementById("btnCancelarNombre");
//const txtNombrePerfil = document.getElementById("txtNombrePerfil");

const btnEditarNumTel = document.getElementById("btnEditarNumTel");
const btnGuardarNumTel = document.getElementById("btnGuardarNumTel");
const btnCancelarNumTel = document.getElementById("btnCancelarNumTel");

const btnEditarFechaNacimiento = document.getElementById("btnEditarFechaNacimiento");
const btnGuardarFechaNacimiento = document.getElementById("btnGuardarFechaNacimiento");
const btnCancelarFechaNacimiento = document.getElementById("btnCancelarFechaNacimiento");

//DOM de Tabla
const tdNombreLS = document.getElementById("tdNombreLS");
const tdCorreoLS = document.getElementById("tdCorreoLS");
const tdTelefonoLS = document.getElementById("tdTelefonoLS");
const tdFechaNacimientoLS = document.getElementById("tdFechaNacimientoLS");

//Obteniendo información de Local Storage
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
const allUsers = JSON.parse(localStorage.getItem("users")) || [];


//Si no hay elemento en current user
if(Object.keys(currentUser).length === 0){
  const loginReminder = document.getElementById("loginReminder");
  document.getElementById("mainContent").style.display = "none";
  loginReminder.style.display = "block";
}

// Actualizando los campos de la tabla
//Nombre
tdNombreLS.insertAdjacentHTML("afterbegin", `<span id="spanNombreLS">${currentUser.userName || ""}</span>
<input type="text" class="form-control custom-input input-bgc" id="txtNombrePerfil" style="display: none;">`);
const spanNombreLS = document.getElementById("spanNombreLS");
const txtNombrePerfil = document.getElementById("txtNombrePerfil");

//Teléfono
tdTelefonoLS.insertAdjacentHTML("afterbegin", `<span id="spanTelLS">${currentUser.userTel || ""}</span>
<input type="tel" class="form-control custom-input input-bgc" id="txtTelPerfil" style="display: none;">`);
const spanTelLS = document.getElementById("spanTelLS");
const txtTelPerfil = document.getElementById("txtTelPerfil"); 

//Correo (no necesita editarse)
tdCorreoLS.innerText = currentUser.userEmail || "";

function formatDateString(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

const formattedDate = formatDateString(currentUser.userdateOfBirth);

//Fecha de nacimiento
tdFechaNacimientoLS.insertAdjacentHTML("afterbegin", `<span id="spanFechaNacimientoLS">${formattedDate || ""}</span>
<input type="date" class="form-control input-bgc custom-input input-bgc" id="txtFechaNacimientoPerfil" name="dateOfBirth" min="1900-01-01" max="2010-12-31" style="display: none;">`);
const spanFechaNacimientoLS = document.getElementById("spanFechaNacimientoLS");
const txtFechaNacimientoPerfil = document.getElementById("txtFechaNacimientoPerfil");

//tdFechaNacimientoLS.innerText = currentUser.userdateOfBirth || "";

// Imagen de perfil
fotoPerfil.src = currentUser.userPP || "./assets/profile-pictures/blank-pp.webp";

//Función para obtener la edad del usuario
function calcularEdad(dateOfBirthStr) {
  const hoy = new Date();
  const fechaNacimiento = new Date(dateOfBirthStr);

  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();

  // Si aún no ha cumplido años este año
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  return edad;
}

//Asignamos la edad a una nueva constante que llama al método para calcular edad y pasa como parámetro lo obtenido del local storage
const edad = calcularEdad(currentUser.userdateOfBirth);

//Agregando datos en el resumen de biografia al lado de foto de perfil
txtDatosUsuario.innerHTML = "";
txtDatosUsuario.insertAdjacentHTML("afterbegin", 
    `<div>
        <h3 id="nombreDeUsuarioPerfil">${currentUser.userName || ""}</h3>
        <h5>${currentUser.userEmail || ""}</h5>
        <h5 id="edadDeUsuarioPerfil">${edad || ""} años</h5>
    </div>`);

//Datos a un lado de perfil que pueden variar si se actualiza la información
const nombreDeUsuarioPerfil = document.getElementById("nombreDeUsuarioPerfil");
const edadDeUsuarioPerfil = document.getElementById("edadDeUsuarioPerfil");

//////////////////////////////////////////////////////////////////////////////////////
// function guardarCambiosBackEnd() {
//   const myHeaders = new Headers();
//   myHeaders.append("Authorization", `Bearer ${sessionStorage.getItem("accessToken").replace(/"/g, '')}`);
//   myHeaders.append("Content-Type", "application/json");

//   const body = JSON.stringify({
//     usu_nombre: currentUser.userName,
//     usu_telefono: currentUser.userTel,
//     usu_fechaNacimiento: currentUser.userdateOfBirth,
//     usu_foto_perfil: currentUser.userPP
//   });

//   fetch(`http://localhost:8080/unireview/usuarios/${currentUser.id}`, {
//     method: "PUT",
//     headers: myHeaders,
//     body: body
//   })
//     .then(res => {
//       if (!res.ok) throw new Error("Error actualizando usuario");
//       return res.text(); // o res.json()
//     })
//     .then(data => console.log("Usuario actualizado correctamente:", data))
//     .catch(err => console.error(err));
// }

function guardarCambiosBackEnd(){
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("accessToken").replace(/"/g, '')}`);
  const raw = "";

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(`/unireview/usuarios/${currentUser.idusuario}?usu_nombre=${currentUser.userName}&usu_telefono=${currentUser.userTel}&usu_fechanacimiento=${currentUser.userdateOfBirth}&usu_foto_perfil=${currentUser.userPP}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
////////////////////////////////////////////////////////////////////////////////////////

//Editar Nombre
btnEditarNombre.addEventListener("click", () => {
  txtNombrePerfil.style.border="";
  spanNombreLS.style.display = "none"
  txtNombrePerfil.style.display = "inline-block";
  txtNombrePerfil.value = currentUser.userName || "";
  
  btnEditarNombre.style.display = "none";
  btnGuardarNombre.style.display = "inline-block";
  btnCancelarNombre.style.display = "inline-block";
});

//Cancelar Nombre
btnCancelarNombre.addEventListener("click", () => {
  alertValidacionesTextoNombre.innerHTML = ""; 
  alertValidacionesNombre.style.display = "none";

  txtNombrePerfil.style.display = "none";
  spanNombreLS.style.display = "inline-block"
  btnGuardarNombre.style.display = "none";
  btnCancelarNombre.style.display = "none";
  btnEditarNombre.style.display = "inline-block";
});

//Guardar Nombre
btnGuardarNombre.addEventListener("click", () => {
  //Bandera
  let isValid = true;

  //alertValidacionesTexto.innerHTML = ""; 
  alertValidacionesNombre.style.display = "none";
   
  txtNombrePerfil.style.border="";
  txtNombrePerfil.value = txtNombrePerfil.value.trim();
  const nuevoNombre = txtNombrePerfil.value.trim();

  //Validación nombre es mayor a 3 letras
  if(txtNombrePerfil.value.length <= 2){
      txtNombrePerfil.style.border="solid medium red";
      alertValidacionesTextoNombre.innerHTML +="<strong>Favor de escribir tu nombre de forma correcta.</strong><br/>";
      alertValidacionesNombre.style.display="block";
      isValid=false;
  }

if(isValid){
  Swal.fire({
    title: 'Guardando nueva información',
    text: `¿Es correcto el nombre ingresado: ${nuevoNombre}?`,
    imageUrl: "../assets/think.svg",
    imageWidth: 300,
    imageHeight: 190,
    reverseButtons: true,
    showCancelButton: true,
    confirmButtonColor: '#EB5A3C',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Sí, guardar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      // Actualiza en currentUser
      currentUser.userName = nuevoNombre;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      guardarCambiosBackEnd();

      // Actualiza también en users
      const index = allUsers.findIndex(u => u.userEmail === currentUser.userEmail);
      if (index !== -1) {
        allUsers[index].userName = nuevoNombre;
        localStorage.setItem("users", JSON.stringify(allUsers));
      }

      // Actualiza la vista
      spanNombreLS.innerText = nuevoNombre;
      nombreDeUsuarioPerfil.innerText = nuevoNombre;

      // Oculta botones y input
      txtNombrePerfil.style.display = "none";
      spanNombreLS.style.display = "inline-block";
      btnGuardarNombre.style.display = "none";
      btnCancelarNombre.style.display = "none";
      btnEditarNombre.style.display = "inline-block";

      Swal.fire({
          title: '¡Guardado!',
          text: 'Tu nombre fue actualizado correctamente.',
          imageUrl: "../assets/love.svg",
          imageWidth: 300,
          imageHeight: 190,
          confirmButtonColor: '#EB5A3C'});
    }//sweetAlert
  });
}//if isValid
});//function guardar nombre



//Editar Teléfono
btnEditarNumTel.addEventListener("click", () => {
  txtTelPerfil.style.border="";
  spanTelLS.style.display = "none"
  txtTelPerfil.style.display = "inline-block";
  txtTelPerfil.value = currentUser.userTel || "";
  
  btnEditarNumTel.style.display = "none";
  btnGuardarNumTel.style.display = "inline-block";
  btnCancelarNumTel.style.display = "inline-block";
});

//Cancelar Teléfono
btnCancelarNumTel.addEventListener("click", () => {
  alertValidacionesTextoTel.innerHTML = ""; 
  alertValidacionesTel.style.display = "none";

  txtTelPerfil.style.display = "none";
  spanTelLS.style.display = "inline-block"
  btnGuardarNumTel.style.display = "none";
  btnCancelarNumTel.style.display = "none";
  btnEditarNumTel.style.display = "inline-block";
});

//Guardar Número de Teléfono
btnGuardarNumTel.addEventListener("click", () => {
const telefonoValidacionPerfil = new RegExp("^(?!.*(\\d)\\1{4})[0-9]{10}$");
  //Bandera
  let isValid = true;

  //alertValidacionesTexto.innerHTML = ""; 
  alertValidacionesTel.style.display = "none";
   
  txtTelPerfil.style.border="";
  txtTelPerfil.value = txtTelPerfil.value.trim();
  const nuevoTel = txtTelPerfil.value.trim();

  //Si el teléfono no es válido
    if(!telefonoValidacionPerfil.test(txtTelPerfil.value)){
      txtTelPerfil.style.border="solid medium red";
      alertValidacionesTextoTel.innerHTML +="<strong>Ingresa un número de teléfono válido (10 dígitos).</strong><br/>";
      alertValidacionesTel.style.display="block";
      isValid=false;
    }
if(isValid){
  Swal.fire({
    title: 'Guardando nueva información',
    text: `¿Es correcto el número ingresado: ${nuevoTel}?`,
    imageUrl: "../assets/think.svg",
    imageWidth: 300,
    imageHeight: 190,
    reverseButtons: true,
    showCancelButton: true,
    confirmButtonColor: '#EB5A3C',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Sí, guardar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Actualiza en currentUser
      currentUser.userTel = nuevoTel;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      guardarCambiosBackEnd();
      // Actualiza también en users
      const index = allUsers.findIndex(u => u.userEmail === currentUser.userEmail);
      if (index !== -1) {
        allUsers[index].userTel = nuevoTel;
        localStorage.setItem("users", JSON.stringify(allUsers));
      }

      // Actualiza la vista
      spanTelLS.innerText = nuevoTel;

      // Oculta botones y input
      txtTelPerfil.style.display = "none";
      spanTelLS.style.display = "inline-block";
      btnGuardarNumTel.style.display = "none";
      btnCancelarNumTel.style.display = "none";
      btnEditarNumTel.style.display = "inline-block";


      Swal.fire({
          title: '¡Guardado!',
          text: 'Tu número de teléfono fue actualizado correctamente.',
          imageUrl: "../assets/love.svg",
          imageWidth: 300,
          imageHeight: 190,
          confirmButtonColor: '#EB5A3C'});
    }
  });
}
});

//Editar Fecha de nacimiento
btnEditarFechaNacimiento.addEventListener("click", () => {
  txtFechaNacimientoPerfil.style.border="";
  alertValidacionesTextoFechaNacimiento.style.display = "none";
  alertValidacionesFechaNacimiento.style.display = "none";

  spanFechaNacimientoLS.style.display = "none"
  txtFechaNacimientoPerfil.style.display = "inline-block";
  txtFechaNacimientoPerfil.value = currentUser.userdateOfBirth || "";
  
  btnEditarFechaNacimiento.style.display = "none";
  btnGuardarFechaNacimiento.style.display = "inline-block";
  btnCancelarFechaNacimiento.style.display = "inline-block";
});

//Cancelar Fecha de Nacimiento
btnCancelarFechaNacimiento.addEventListener("click", () => {

  alertValidacionesFechaNacimiento.style.display = "none";
  alertValidacionesTextoFechaNacimiento.style.display = "none";

  txtFechaNacimientoPerfil.style.display = "none";
  spanFechaNacimientoLS.style.display = "inline-block"
  btnGuardarFechaNacimiento.style.display = "none";
  btnCancelarFechaNacimiento.style.display = "none";
  btnEditarFechaNacimiento.style.display = "inline-block";
});

//Guardar Fecha de Nacimiento
btnGuardarFechaNacimiento.addEventListener("click", () => {
  const nuevaFechaNacimiento = txtFechaNacimientoPerfil.value;
let isValid = true;
  
  alertValidacionesFechaNacimiento.style.display = "none";

  //Si no se ingresa una fecha de nacimiento
  if (txtFechaNacimientoPerfil.value.trim() === "") {
    txtFechaNacimientoPerfil.style.border = "solid medium red";
    alertValidacionesTextoFechaNacimiento.innerHTML += "<strong>Selecciona tu fecha de nacimiento.</strong><br/>";
    alertValidacionesFechaNacimiento.style.display = "block";
    alertValidacionesTextoFechaNacimiento.style.display = "inline-block";
    isValid = false;
}

if(isValid){
  Swal.fire({
    title: 'Guardando nueva información',
    text: `¿Es correcta la fecha de nacimiento ingresada: ${nuevaFechaNacimiento}?`,
    imageUrl: "../assets/think.svg",
    imageWidth: 300,
    imageHeight: 190,
    reverseButtons: true,
    showCancelButton: true,
    confirmButtonColor: '#EB5A3C',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Sí, guardar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Actualiza en currentUser
      currentUser.userdateOfBirth = nuevaFechaNacimiento;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      guardarCambiosBackEnd();

      // Actualiza también en users
      const index = allUsers.findIndex(u => u.userEmail === currentUser.userEmail);
      if (index !== -1) {
        allUsers[index].userdateOfBirth = nuevaFechaNacimiento;
        localStorage.setItem("users", JSON.stringify(allUsers));
      }

      // Actualiza la vista
      spanFechaNacimientoLS.innerText = formatDateString(nuevaFechaNacimiento);
      const nuevaEdad = calcularEdad(nuevaFechaNacimiento);
      edadDeUsuarioPerfil.innerText = `${nuevaEdad} años`;

      // Oculta botones y input
      txtFechaNacimientoPerfil.style.display = "none";
      spanFechaNacimientoLS.style.display = "inline-block";
      btnGuardarFechaNacimiento.style.display = "none";
      btnCancelarFechaNacimiento.style.display = "none";
      btnEditarFechaNacimiento.style.display = "inline-block";

      Swal.fire({
          title: '¡Guardado!',
          text: 'Tu fecha de nacimiento fue actualizada correctamente.',
          imageUrl: "../assets/love.svg",
          imageWidth: 300,
          imageHeight: 190,
          confirmButtonColor: '#EB5A3C'});
    }
  });
}
});

//Uso de Cloudinary en overlay de foto de perfil
document.querySelector('.foto-overlay').addEventListener('click', function () {
  cloudinary.openUploadWidget({
    cloudName: 'dnnna4gud',
    uploadPreset: 'profile-pictures-unireview',
    sources: ['local', 'url', 'camera'],
    cropping: true,
    multiple: false,
    // folder: 'usuarios/fotos-perfil',
    resourceType: 'image'
  }, (error, result) => {
    if (!error && result && result.event === "success") {
        //console.log("no ocurrio un error")
      const imageUrl = result.info.secure_url;
      document.getElementById('fotoPerfil').src = imageUrl;
        // Actualiza la imagen mostrada
        fotoPerfil.src = imageUrl;
        //Ejecuta el metodo para actualizar la foto de perfil con la imageUrl como parametro
        actualizaLocalStorage(imageUrl);
    }
  });
});

function actualizaLocalStorage(imageUrl){
  // Modifica directamente el currentUser existente con la url obtenida
  currentUser.userPP = imageUrl;
  //Se coloca en el local storage el item actualizado
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  guardarCambiosBackEnd();
  //Actualizando el local storage de users para que guarde la foto
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];
  //Iterando por todos los usuarios 
  for(let i=0; i<allUsers.length; i++){
    // console.log("Recorro el arreglo");
    if(allUsers[i].userEmail.toLowerCase() === currentUser.userEmail.toLowerCase()){
      //console.log("Entro en condicion");
      allUsers[i].userPP = imageUrl;
      break;
    }//if email matches
  }//for allUsers
  //Asignando el arreglo actualizado al local storage
  localStorage.setItem("users", JSON.stringify(allUsers));

  const allComents = JSON.parse(localStorage.getItem("comments")) || [];
  //Iterando por todos los comentarios 
  for(let j=0; j<allComents.length; j++){
    //console.log("Recorro el arreglo");
    if(allComents[j].username.toLowerCase() === currentUser?.userEmail?.split("@")[0]){
      //console.log("Entro en condicion");
      allComents[j].img = imageUrl;
    }//if email matches to username in comments
  }//for allUsers
  //Asignando el arreglo actualizado al local storage
  localStorage.setItem("comments", JSON.stringify(allComents));

  //ACTUALIZANDO IMAGENES DE LA LISTA DE COMENTARIOS DEL DOM
  let listaImagenes = document.getElementsByClassName("perfil-comentario-img");
  for(let i=0; i< listaImagenes.length; i++){
    listaImagenes[i].src =  imageUrl ||  "./assets/profile-pictures/blank-pp.webp"; 
  }
}
// HISTORIAL DE COMENTARIOS EN PERFIL

// Contenedor donde se colocarán los comentarios
const historialContenedor = document.getElementById("historialComentarios");

// Si hay comentarios en localStorage

//--------------
const requestOptions = {
  method: "GET",
  redirect: "follow"
};
let allComments;
let currentUserUsername;
let comentariosUsuario;
fetch(`/unireview/publicaciones/filter/${JSON.parse(localStorage.getItem("currentUser")).userEmail}`, requestOptions)
  .then((response) => response.text())
  .then((result) => {
    allComments = JSON.parse(result) || [];
    console.log(allComments);
    // Nombre de usuario basado en su correo (antes del @)
    currentUserUsername = currentUser.userEmail?.split("@")[0] || "";

    // Filtramos solo los comentarios del usuario actual
    comentariosUsuario = allComments.filter(comentario => comentario.usuario.usu_email === currentUser.userEmail);
    console.log(currentUserUsername);
    // Si hay comentarios, renderízalos
    if (comentariosUsuario.length > 0) {
    comentariosUsuario.forEach(comment => {
      const rating = parseInt(comment.publi_calificacion) || 0;
      let starsHTML = "";
      for (let i = 1; i <= 5; i++) {
        starsHTML += `<span class="star ${i <= rating ? 'selected' : ''}" data-value="${i}">&#9733;</span>`;
      }

      const etiquetasConHash = comment.publi_etiqueta
      .split(',')
      .map(etiqueta => `#${etiqueta.trim()}`)
      .join(' ');

      // Crea el nodo desde string
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = `
        <div class="card mb-3 comentario-card p-3">
          <div class="d-flex justify-content-between comentario-contenido flex-column flex-md-row">
            <div class="d-flex flex-column flex-md-row">
              <img src="${comment.usuario.usu_foto_perfil}" class="rounded-circle me-md-3 mb-2 mb-md-0 perfil-comentario-img" alt="Foto de usuario" width="60" height="60" style="object-fit: cover;">
              <div>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <h4 class="card-title mb-0" style="line-height: 1;">${comment.usuario.usu_nombre} </h4>
                  <p class="text-muted mb-0" style="line-height: 1;"> — ${comment.publi_tipo_usuario}</p>
                </div>
                <h6 class="card-subtitle mb-2 text-muted">${comment.carrera.carr_nombre} / ${comment.escuela.esc_nombre}</h6>
                <div class="d-flex align-items-center mb-2">
                  <h6 class="card-subtitle text-muted mb-0 me-2">${comment.publi_fecha}</h6>
                  <div class="rating d-flex static-rating">${starsHTML}</div>
                </div>
                <p class="card-text mb-0">${comment.publi_comentario}</p>
                <div class="mt-2">
                <span style="color: #fd6b4d">${etiquetasConHash}</span>
                </div>
              </div>
            </div>
            <div class="eliminar-contenedor mt-2 mt-md-0">
              <button class="btn btn-sm btn-outline-danger btnEliminarComentario w-100 w-md-auto" data-fecha="${comment.date}" data-mensaje="${comment.message}" data-idpubli="${comment.idpublicacion}">
                <i class="bi bi-trash me-1"></i>Eliminar
              </button>
            </div>
          </div>
        </div>`;

      const commentNode = tempDiv.firstElementChild;
      historialContenedor.appendChild(commentNode);

      // Asignar evento justo después de insertarlo
      const btn = commentNode.querySelector('.btnEliminarComentario');
      btn.addEventListener("click", function () {
        const fecha = this.dataset.fecha;
        const mensaje = this.dataset.mensaje;
        const idPubli = this.dataset.idpubli;
        Swal.fire({
          title: '¿Eliminar comentario?',
          text: 'Esta acción no se puede revertir.',
          imageUrl: "../assets/warning.svg",
          imageWidth: 300,
          imageHeight: 190,
          reverseButtons: true,
          showCancelButton: true,
          confirmButtonColor: '#EB5A3C',
          cancelButtonColor: '#6c757d',
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            let comentarios = JSON.parse(localStorage.getItem("comments") || "[]");
            comentarios = comentarios.filter(c => !(c.date === fecha && c.message === mensaje));
            localStorage.setItem("comments", JSON.stringify(comentarios));
            //------
            const myHeaders = new Headers();
              myHeaders.append("Authorization", `Bearer: ${sessionStorage.getItem("accessToken").replace(/"/g, '')}`);
              myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: "DELETE",
                redirect: "follow",
                headers: myHeaders,
              };
              

              fetch(`/unireview/publicaciones/${idPubli}`, requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.error(error));
            //------
            const card = this.closest(".comentario-card") || this.closest(".card");
            if (card) card.remove();

            Swal.fire({
              title: 'Eliminado',
              text: 'Tu comentario ha sido eliminado.',
            imageUrl: "../assets/relax.svg",
            imageWidth: 300,
            imageHeight: 190,
              confirmButtonColor: '#EB5A3C'
            });
            const tempDiv = document.createElement('divNoHayComentarios');
            tempDiv.insertAdjacentHTML("afterbegin", 
              `<p class="text-muted">Aún no has realizado ningún comentario. Ve a la página de Foro para compartir tus experiencias.</p>`
            );
            historialContenedor.appendChild(tempDiv);
          }
        });
      });
    });
    }else{
      const tempDiv = document.createElement('divNoHayComentarios');
      tempDiv.insertAdjacentHTML("afterbegin", 
        `<p class="text-muted">Aún no has realizado ningún comentario. Ve a la página de Foro para compartir tus experiencias.</p>`
      );
      historialContenedor.appendChild(tempDiv);
      
    }
  })
  .catch((error) => console.error(error));
//--------------



