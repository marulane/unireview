//Input
const txtEmail = document.getElementById("txtEmailLogin");
const txtPass = document.getElementById("txtPassLogin");

//Boton
const btnLogin = document.getElementById("btnLogin");

//Alertas
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");



btnLogin.addEventListener("click", function(event){
  event.preventDefault();

  let isValid = true;
  
  txtEmail.style.border="";
  txtPass.style.border="";

  alertValidacionesTexto.innerHTML = ""; 
  alertValidaciones.style.display = "none";

  txtEmail.value = txtEmail.value.trim();
  
  //Regex
  const correoValidacion = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
  
  //Si el correo tiene formato valido
  if(!correoValidacion.test(txtEmail.value)){
    txtEmail.style.border="solid medium red";
    alertValidacionesTexto.innerHTML +="<strong>Favor de ingresar un correo válido.</strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }
  

    //Buscando si existe el correo en el localStorage

      //Convertimos a un arreglo de objetos json el contenido del localstorage
      
     //Si "users" existe en localStorage: allUsers será un arreglo con los usuarios guardados.
      //Si "users" no existe todavía: allUsers será un arreglo vacío.
      //const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      //guardando el contenido del input en una constante para evaluarla
      const emailToCheck = txtEmail.value.trim().toLowerCase();
      const passwordCheck = txtPass.value.trim();
      //si en el json hay algun elemento que contenga en el valor "userEmail" el mismo valor de "emailToCheck"
      //el método some() devuelve un booleano
      //Devuelve **true** si al menos un elemento del arreglo cumple la condición.
      //Devuelve **false** si ninguno la cumple.
      // const emailExists = allUsers.some(user => user.userEmail.toLowerCase() === emailToCheck);


      //const userCheck = allUsers.find(user => user.usu_email.toLowerCase() === emailToCheck);
      //----------------------------
        const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
              "usu_email": txtEmail.value,
              "usu_password": txtPass.value
            });

            const requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow"
          };

          let userCheck;
        //http://localhost:8080
 fetch("/unireview/login/", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    try {
      result = JSON.parse(result);
    } catch (e) {
      // Aquí manejamos respuestas que no son JSON (por ejemplo, errores 500 en HTML)
      alertValidacionesTexto.innerHTML += "<strong>Correo o contraseña incorrectos.</strong><br/>";
      alertValidaciones.style.display = "block";
      txtPass.style.border = "solid medium red";
      txtEmail.style.border = "solid medium red";
      return;
    }

    const userCheck = result.usuario;

    if (!userCheck || !userCheck.usu_email) {
      alertValidacionesTexto.innerHTML += "<strong>Autenticación incorrecta. Verifica tus credenciales.</strong><br/>";
      alertValidaciones.style.display = "block";
      txtPass.style.border = "solid medium red";
      txtEmail.style.border = "solid medium red";
      return;
    }

    sessionStorage.setItem("accessToken", JSON.stringify(result.accessToken));

    const currentUser = {
      idusuario: userCheck.idusuario,
      userName: userCheck.usu_nombre,
      userTel: userCheck.usu_telefono,
      userEmail: userCheck.usu_email,
      userdateOfBirth: userCheck.usu_fechaNacimiento,
      userPass: "",
      userPP: userCheck.usu_foto_perfil
    };

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    Swal.fire({
      title: "Inicio de sesión exitoso",
      text: "Serás redirigido a la página de inicio",
      imageUrl: "../assets/love.svg",
      imageWidth: 300,
      imageHeight: 190,
      confirmButtonColor: "#EB5A3C"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "./index.html";
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
    alertValidacionesTexto.innerHTML += "<strong>Error inesperado. Intenta de nuevo más tarde.</strong><br/>";
    alertValidaciones.style.display = "block";
  });
          //----------------------------
      
      

      
     
      

      

});