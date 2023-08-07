/* *******************************
FUNCION
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


let saldo1= gioo.saldo
let saldo2= alondra.saldo
let saldo3= andres.saldo

/* CONTRASEÑA */
let pass1 = gioo.contraseña
let pass2 = alondra.contraseña
let pass3 = andres.contraseña


/* *******************************
BIENVENIDA
*********************************/

document.write("<h1>Bienvenid@: "+ user1+ "</h1>");
        document.write("<h2>Su saldo es:  "+saldo1+"</h2>");


/* *******************************
HACER LA RESTA DE DINERO
*********************************/
let boton =document.querySelector("#restar")
boton.addEventListener("click", ejecutar)

function ejecutar(){

  
     let numResta= prompt("Cuanto desea retirar");
    let resta = saldo1 - numResta;

    
    if (saldo1 >= numResta) {
     document.write("<h1>" +user1+ "</h1>")
     document.write("<h2>Su saldo restante es:  "+ resta+"</h2>");
     document.write('<button type="button" id="regresar">Salir</button>')
    
 


    }else{
        document.write("<h2>No cuentas con saldo suficiente</h2>")
        document.write('<button type="button" id="regresar">Salir</button>')
    
    } 
     /* *******************************
    FUNCION HECHA LOCALMENTE DENTRO DEL IF
*********************************/
let regre = document.querySelector("#regresar");
        regre.addEventListener("click", regresar)
        function regresar(){
            window.location.href = "../index.html"
            

        }

    
}

/* *******************************
VOLVER A INICIO
Y TAMBIEN DECIR QUE HA SALIDO
*********************************/

let regre = document.querySelector("#regresar");
regre.addEventListener("click", regresar)
regre.addEventListener("click", alerta)
function regresar(){
    window.location.href = "../index.html"
    

}

function alerta(){
    alert("HAS SALIDO!!")
}