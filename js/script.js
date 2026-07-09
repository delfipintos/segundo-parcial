// arrays
let nombres = [];
let luces = [];
let horas = [];
let consumos = [];
let costos = [];

// variables
let cantidadObras = 0;
let cantidadIngresada = 0; 

// buttons
const botonCantidad = document.querySelector("#botonCantidad");
const botonAgregar = document.querySelector("#botonAgregar");
const botonCalcular = document.querySelector("#botonCalcular");
const botonReiniciar = document.querySelector("#botonReiniciar");

// disable buttons al empezar para que sólo se pueda ingresar la cantidad de obras
botonAgregar.disabled = true;
botonCalcular.disabled = true;
botonReiniciar.disabled = true;

// ingresar cantidad de obras
botonCantidad.addEventListener("click", cargarCantidad);
function cargarCantidad() {
    cantidadObras = parseInt(document.querySelector("#cantidadObras").value);  // cantidad de obras ingresada por el usuario
  
      if (cantidadObras > 0) { 
        document.querySelector("#cantidadObras").disabled = true; // si la cantidad de obras ingresada por el usuario no es un número mayor a 0, se deshabilita el ingresar la cantidad
        botonCantidad.disabled = true; // se deshabilita el botón de cantidad para que no vuelva a usarse
        botonAgregar.disabled = false; // se habilita el botón para comenzar a cargar obras

      } else {
        alert("por favor, ingrese una cantidad válida");
      }
} 


