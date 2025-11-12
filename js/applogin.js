//Asignacion de usuario
const userMail = "cyberkyd@music.com";
const userPass = "root113";

//Evento submit enviado el formulario
document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    //Guarda los datos de input
    const mailIn = document.getElementById("user-mail").value;
    const passIn = document.getElementById("user-password").value;
    //Validacion
    if(mailIn==userMail && passIn == userPass){
        window.location.href = "../../index.html?mail=" + mailIn;
    }else{
        alert("Datos Incorrectos: Ingrese los datos nuevamente")
    }
});