let urlParametros = new URLSearchParams(window.location.search);
//usuario dentro de get es por que en app.js se llamo asi al parametro
//window.location.href = "succes.html?usuario=" + userContainer;
let username = urlParametros.get("mail")
//para mostrar el username en el html Renderizarlo?
document.addEventListener('DOMContentLoaded', function(event){
    if (username){
        document.getElementById('nombre-usuario').textContent = username;
        document.getElementById('boton-usuario').addEventListener("click", function(event){
            event.preventDefault();
            //logged
            window.location.href = "./pages/user/logged.html?mail=" + username;
        });
        document.getElementById('boton-carrito').addEventListener("click", function(event){
            event.preventDefault();
            //
            window.location.href = "./pages/cart.html?mail=" + username;
        });
        document.getElementById('boton-index').addEventListener("click", function(event){
            event.preventDefault();
            window.location.href = "./index.html?mail=" + username;
        });
        document.getElementById('boton-about').addEventListener("click", function(event){
            event.preventDefault();
            window.location.href = "./pages/about.html?mail=" + username;
        });
    }else{
        document.getElementById('nombre-usuario').textContent = "Iniciar Sesión"
    }
});