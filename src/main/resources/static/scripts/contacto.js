const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensajevalidacion");
const btnEnviar = document.getElementById("btnEnviar");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");


btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
     nombre.style.border="";
     correo.style.border="";
     telefono.style.border="";
     mensaje.style.border="";
    let isValid = true;

    nombre.value = nombre.value.trim();
    correo.value = correo.value.trim();
    telefono.value = telefono.value.trim();
   // const telefonoLimpio = telefono.value.replace(/\D/g, ''); // con este se pueden permitir espacios y guiones. 
   // Esta constante limpia el numero para que se pueda validar. Si se usa, hay que descomentar, usar la constante como parametro de validacion en if de la validacion del telefono 
    mensaje.value = mensaje.value.trim();

    const correoValidacion = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    const telefonoValidacion = new RegExp("^(?!.*(\\d)\\1{4})[0-9]{10}$");
   
    alertValidacionesTexto.innerHTML = ""; 
    alertValidaciones.style.display = "none";

    if(nombre.value.length <= 2){
        nombre.style.border="solid medium red";
        alertValidacionesTexto.innerHTML +="<strong>Favor de escribir tu nombre de forma correcta</strong><br/>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

    if(!correoValidacion.test(correo.value)){
        correo.style.border="solid medium red";
        alertValidacionesTexto.innerHTML +="<strong>Favor de ingresar un correo válido</strong><br/>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

    if(!telefonoValidacion.test(telefono.value)){
        telefono.style.border="solid medium red";
        alertValidacionesTexto.innerHTML +="<strong>Ingresa un número de teléfono válido</strong><br/>";
        alertValidaciones.style.display="block";
        isValid=false;
    }
 
    if(mensaje.value.length < 10 || mensaje.value.length > 100){
        mensaje.style.border="solid medium red";
        alertValidacionesTexto.innerHTML +="<strong>El mensaje debe contener entre 10 y 100 caracteres</strong><br/>";
        alertValidaciones.style.display="block";
        isValid=false;
    }



        if(isValid){
            //////////////// Envia el mensaje por correo a traves de emialJS/////////////////////
 
           let formulario = document.getElementById("formContacto");
           emailjs.init("8BlLdWkC8T6g5Fb1i");

         emailjs.sendForm('service_hfue3gs', 'template_v79d4bl', formulario)
        //    .then(function() { //revisa si funciona el correo
        //      console.log('Correo enviado con éxito.');
        //    }, function(error) {
         //      console.error('Error al enviar:', error);
              //    }); 
              
            Swal.fire({
               title: "¡Mensaje Enviado!",
               text: "En breve nos pondremos en contacto",
               imageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmM0dmJpdnYzeGh6NGVrNnRoeHRhcnl0cjdicjlhdHBxdnN2Y3JqayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/146OjNh4dvjAKk/giphy.gif",
               imageWidth: 300,
               imageHeight: 190,
               imageAlt: "Mensaje enviado",
               confirmButtonColor: "#EB5A3C"
             });


         formulario.reset();
     } 
});
