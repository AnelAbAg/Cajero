

/* *******************************
DATOS DE LA PERSONA
*********************************/
function crearPersona(nombre, contraseña, saldo) {
    let persona  = {
        nombre: nombre,
        contraseña: contraseña,
        saldo: saldo
    }
    return persona
}
let gioo = crearPersona("Yova", 2112, 789)
let alondra = crearPersona("Alondra", 2751, 800)
let andres = crearPersona("Andres", 5651, 1200)

/* USUARIOS */
let user1 =gioo.nombre
let user2 =alondra.nombre
let user3 =andres.nombre


/* CONTRASEÑA */
let pass1 = gioo.contraseña
let pass2 = alondra.contraseña
let pass3 = andres.contraseña




/* *******************************
FORMULARIO
*********************************/
const login =document.getElementById("comprobarUser")

login.addEventListener("submit", function(event){
    event.preventDefault();

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (user === user1 &&  password == pass1) {
        
        window.location.href = "./html/user1.html"
  
    }else if(user === user2  && password == pass2){
        /* document.write("Bienvenid@: "+ user2); */
        window.location.href = "./html/user2.html"
        
    }else if(user === user3 && password == pass3){
   
        window.location.href = "./html/user3.html"
        
    }
    else{
        alert("Vuelve a intentarlo")
        
    }
    
})
