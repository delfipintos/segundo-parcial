// arrays
let nombres = [];
let luces = [];
let horas = [];
let consumos = [];
let costos = [];

// variables
let cantidadObras = 0;
let contador = 0; // cambio de nombre para mayor comodidad 

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

// calcular resultados 
botonCalcular.addEventListener("click", calcular); // al hacer click en calcular, se ejecuta la función
function calcular() {
    let consumoTotal = 0; // acumulador del consumo total
    let promedio = 0; // variable para guardar el promedio
    let mayorTiempo = horas[0]; // toma la primera obra como referencia para buscar cuál tiene el mayor tiempo de funcionamiento
    let nombreMayor = nombres[0]; // guarda el nombre de la primera obra
    let costoMayor = luces[0] * horas[0] * consumo[0] * costo[0]; // calcula el costo diario

    let contador20 = 0; // contador de obras con más de 20 luces
    
    for (let i = 0; i < cantidadObras; i++) { // recorre todas las obras cargadas hasta el momento
        let consumoObra = luces[i] * horas[i] * consumo[i]; // calcula el consumo diario de una obra
        consumoTotal = consumoTotal + consumoObra; // lo suma al consumo total

        if (horas[i] > mayorTiempo) { // comprueba cuál es la obra que mayor tiempo de funcionamiento tiene
            mayorTiempo = horas[i];
            nombreMayor = nombres[i];
            costoMayor = consumoObra * costo[i]; // calcula el costo diario de esa obra
        }
        
        if (luces[i] > 20) { // si la obra pone en funcionamiento más de 20 luces, aumenta el contador 
            contador20++;
        }
        
    }
    
}
    promedio = consumoTotal / cantidadObras; // calcula el total del consumo
    let porcentaje = contador20 * 100 / cantidadObras; // calcula el porcentaje de obras que ponen en funcionamiento más de 20 luces

// muestra todos los resultados obtenidos
 document.querySelector("#resultado").innerText =

        "consumo diario total: " + consumoTotal + " kWh\n\n" +
        "consumo promedio por obra: " + promedio + " kWh\n\n" +
        "obra con mayor tiempo de funcionamiento: " + nombreMayor + "\n" +
        "costo diario: $" + costoMayor + "\n\n" +
        "porcentaje de obras con más de 20 luces: " + porcentaje + "%";

    butonCalcular.disabled = true; // se deshabilita el botón calcular
    butonReiniciar.disabled = false; // habilita el botón reiniciar

// reiniciar sistema
butonReiniciar.addEventListener("click", reiniciar);
function reiniciar() {
    location.reload();

}
