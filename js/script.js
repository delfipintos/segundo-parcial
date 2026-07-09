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
    cantidadObras = Number(document.querySelector("#cantidadObras").value);  // cantidad de obras ingresada por el usuario
  
      if (cantidadObras > 0) { 
        document.querySelector("#cantidadObras").disabled = true; // si la cantidad de obras ingresada por el usuario no es un número mayor a 0, se deshabilita el ingresar la cantidad
        botonCantidad.disabled = true; // se deshabilita el botón de cantidad para que no vuelva a usarse
        botonAgregar.disabled = false; // se habilita el botón para comenzar a cargar obras

      } else {
        alert("por favor, ingrese una cantidad válida");
      }
} 

// agregar datos de una de las obras
botonAgregar.addEventListener("click", agregarObra);
function agregarObra() {
    // datos del form
    let nombre = document.querySelector("#nombre").value;
    let cantidadLuces = Number(document.querySelector("#luces").value); // anteriormente, mientras iba verificando la estructura del código de js con IA, me sugirió que utilice parseInt y parseFloat en vez de Number para mayor comodidad pero luego de revisar me dí cuenta que no está en los temas explicados, por lo tanto no lo utilizaré.
    let horasDia = Number(document.querySelector("#horas").value);
    let consumoHora = Number(document.querySelector("#consumo").value);
    let costoKwh = Number(document.querySelector("#costo").value);

 // validar los datos
    if (nombre == "" || cantidadLuces <= 0 || horasDia <= 0 || consumoHora <= 0 || costoKwh <= 0) {
        alert("por favor, complete todos los datos correctamente.");
        } else {
        // guarda los datos una vez completos
        nombres.push(nombre);
        luces.push(cantidadLuces);
        horas.push(horasDia);
        consumo.push(consumoHora);
        costo.push(costoKwh);

        // aumenta el contador
        contador++; 

        // limpia el form
        document.querySelector("#nombre").value = "";
        document.querySelector("#luces").value = "";
        document.querySelector("#horas").value = "";
        document.querySelector("#consumo").value = "";
        document.querySelector("#costo").value = "";

   // una vez cargadas todas las obras
        if (contador == cantidadObras) {
            botonAgregar.disabled = true; // se deshabilita el botón agregar
            botonCalcular.disabled = false; // se habilita el botón calcular
            alert("obras cargadas");

        }

    }

}
