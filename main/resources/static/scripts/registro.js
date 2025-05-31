const txtName = document.getElementById("txtName");
const txtTel = document.getElementById("txtTel");
const txtEmail = document.getElementById("txtEmail");
const txtdateOfBirth = document.getElementById("txtdateOfBirth");
const txtPass = document.getElementById("txtPass");
const txtConfirmPass = document.getElementById("txtConfirmPass");
const btnRegister = document.getElementById("btnRegister");
const btnCancel = document.getElementById("btnCancel");


const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");



//Fecha actual(obtiene la fecha del registro)
const isoDate = new Date().toISOString().split('T')[0];

//Array de nuevos usuarios
let allUsers = [];

//Almacenando usuarios en el localStorage como cadena de texto
//si ya hay usuarios guardados, se cargan al arreglo allUsers
if (localStorage.getItem("users")) {
  allUsers = JSON.parse(localStorage.getItem("users"));
} else {
  //si localStorage no tiene una clave users (es decir, es la primera vez que se usa). 
  //Crea esa clave y la guarda como un arreglo vacío en formato JSON.
  localStorage.setItem("users", JSON.stringify(allUsers));
}

  btnRegister.addEventListener("click", function(event){
    event.preventDefault();

    let isValid = true;

    txtName.style.border="";
    txtConfirmPass.style.border="";
    txtTel.style.border="";
    txtPass.style.border="";
    txtEmail.style.border="";
    txtdateOfBirth.style.border="";

    alertValidacionesTexto.innerHTML = ""; 
    alertValidaciones.style.display = "none";
   

    txtName.value = txtName.value.trim();
    txtEmail.value = txtEmail.value.trim().toLowerCase();
    txtTel.value = txtTel.value.trim();
    txtConfirmPass.value = txtConfirmPass.value.trim();
    txtPass.value = txtPass.value.trim();
    
    //Regex
    const correoValidacion = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    const telefonoValidacion = new RegExp("^(?!.*(\\d)\\1{4})[0-9]{10}$");
    const passwordValidacion = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$");

    
    if(txtName.value==="" && txtEmail.value === "" && txtTel.value === "" && txtPass.value === "" && txtConfirmPass.value === "" && txtdateOfBirth.value === ""){
      [txtName, txtEmail, txtdateOfBirth, txtTel, txtPass, txtConfirmPass].forEach(el => el.style.border = "solid medium red");
      alertValidacionesTexto.innerHTML = "<strong>Todos los campos son requeridos.</strong><br/>";
      alertValidaciones.style.display = "block";
      isValid = false;
      return; // ← IMPORTANTE: detiene la ejecución
    }


    //Si el nombre es menor o igual a 2
    if(txtName.value.length <= 2){
      txtName.style.border="solid medium red";
      alertValidacionesTexto.innerHTML +="<strong>Favor de escribir tu nombre de forma correcta.</strong><br/>";
      alertValidaciones.style.display="block";
      isValid=false;
    }

    //Si el teléfono no es válido
    if(!telefonoValidacion.test(txtTel.value)){
      txtTel.style.border="solid medium red";
      alertValidacionesTexto.innerHTML +="<strong>Ingresa un número de teléfono válido (10 dígitos).</strong><br/>";
      alertValidaciones.style.display="block";
      isValid=false;
    }

    //Si el correo no es correcto
    if(!correoValidacion.test(txtEmail.value)){
      txtEmail.style.border="solid medium red";
      alertValidacionesTexto.innerHTML +="<strong>Favor de ingresar un correo válido.</strong><br/>";
      alertValidaciones.style.display="block";
      isValid=false;
    }
    //Si no se ingresa una fecha de nacimiento
    if (txtdateOfBirth.value.trim() === "") {
      alertValidacionesTexto.innerHTML += "<strong>Selecciona tu fecha de nacimiento.</strong><br/>";
      alertValidaciones.style.display = "block";
      txtdateOfBirth.style.border = "solid medium red";
      isValid = false;
    }

  if(!passwordValidacion.test(txtPass.value)){
    txtPass.style.border="solid medium red";
    alertValidacionesTexto.innerHTML +=`<strong>Ingresa una contraseña válida:</strong><br/>
    <ul style = "text-align : center">
      <li>Al menos una letra minúscula. [a-z]</li>
      <li>Al menos una letra mayúscula. [A-Z]</li>
      <li>Al menos un número. [0-9]</li>
      <li>Mínimo 8 caracteres.</li>
    </ul>`;
    alertValidaciones.style.display="block";
    isValid=false;
  }

  if(!(txtPass.value === txtConfirmPass.value) || txtConfirmPass.value=== ""){
    txtConfirmPass.style.border="solid medium red";
    alertValidacionesTexto.innerHTML +="<strong>Captura ambas contraseñas, estas deben ser iguales.</strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }

  if(isValid){
      //Buscando si existe el correo en el localStorage

      //Convertimos a un arreglo de objetos json el contenido del localstorage
      
     //Si "users" existe en localStorage: allUsers será un arreglo con los usuarios guardados.
      //Si "users" no existe todavía: allUsers será un arreglo vacío.
      const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      //guardando el contenido del input en una constante para evaluarla
      const emailToCheck = txtEmail.value.trim().toLowerCase();
      //si en el json hay algun elemento que contenga en el valor "userEmail" el mismo valor de "emailToCheck"
      //el método some() devuelve un booleano
      //Devuelve **true** si al menos un elemento del arreglo cumple la condición.
      //Devuelve **false** si ninguno la cumple.
      const emailExists = allUsers.some(user => user.userEmail.toLowerCase() === emailToCheck);
      //let encodedImageUrl = encodeURIComponent("https://res.cloudinary.com/dnnna4gud/image/upload/v1747435914/blank-pp_e1sbed.webp");

      //-----------------------------
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "usu_nombre": txtName.value,
        "usu_email": txtEmail.value,
        "usu_telefono": txtTel.value,
        "usu_password": txtPass.value,
        "usu_fechaNacimiento": txtdateOfBirth.value,
        "usu_foto_perfil": "https://res.cloudinary.com/dnnna4gud/image/upload/v1747435914/blank-pp_e1sbed.webp"
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      //http://localhost:8080
      fetch("/unireview/usuarios/", requestOptions)
        .then((response) => response.text())
        .then((resultt) => {
          //console.log(resultt);
          let result;
         

          if (resultt === null || resultt == "") {
          alertValidacionesTexto.innerHTML += "<strong>Este correo ya está registrado.</strong><br/>";
          alertValidaciones.style.display = "block";
          txtEmail.style.border = "solid medium red";
          isValid = false;
          }else{
            result = JSON.parse(resultt);
            Swal.fire({
                  title: "¡Ya estás registrado!",
                  text: "Ir a Inicio de Sesión",
                  imageUrl: "../assets/love.svg",
                  imageWidth: 300,
                  imageHeight: 190,
                  confirmButtonColor: "#EB5A3C"
                }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "./inicio-sesion.html"; 
                }
              });;
          }

          

          


        //Se paso currentUser a la pagina de inicio de sesion
        
            // let currentUser = {
            //     "userName" : txtName.value,
            //     "userTel" : txtTel.value,
            //     "userEmail" : txtEmail.value,
            //     "userdateOfBirth" : txtdateOfBirth.value,
            //     "userPass" : txtPass.value,
            //     "userPP" : './assets/profile-pictures/blank-pp.webp'
            //   }

            // allUsers.unshift(currentUser);
            //localStorage.setItem("users", JSON.stringify(allUsers));
            // localStorage.setItem("currentUser", JSON.stringify(currentUser));

            //SwetAlert2 
            
        
        })
        .catch((error) => console.error(error));
      //-----------------------------
    }



  });//btnRegister

  btnCancel.addEventListener("click", function(event) {
    event.preventDefault();

    //Limpiando valores
    txtName.value="";
    txtConfirmPass.value="";
    txtTel.value="";
    txtPass.value="";
    txtEmail.value="";

    //Limpiando estilos
    txtName.style.border="";
    txtConfirmPass.style.border="";
    txtTel.style.border="";
    txtPass.style.border="";
    txtEmail.style.border="";

    //Limpiando alertas
    alertValidacionesTexto.innerHTML = ""; 
    alertValidaciones.style.display = "none";

  });

