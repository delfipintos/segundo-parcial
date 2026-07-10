// arrays
let nombres = [];
let luces = [];
let horas = [];
let consumos = []; 
let costos = [];  

// variables
let cantidadObras = 0;
let contador = 0; 

// buttons
const botonCantidad = document.querySelector("#botonCantidad");
const botonAgregar = document.querySelector("#botonAgregar");
const botonCalcular = document.querySelector("#botonCalcular");
const botonReiniciar = document.querySelector("#botonReiniciar");

// disable buttons al empezar
botonAgregar.disabled = true;
botonCalcular.disabled = true;
botonReiniciar.disabled = true;

// ingresar cantidad de obras
botonCantidad.addEventListener("click", cargarCantidad);
function cargarCantidad() {
    cantidadObras = Number(document.querySelector("#cantidadObras").value);
  
    if (cantidadObras > 0) { 
        document.querySelector("#cantidadObras").disabled = true;
        botonCantidad.disabled = true;
        botonAgregar.disabled = false;
    } else {
        alert("por favor, ingrese una cantidad válida");
    }
} 

// agregar datos de una de las obras
botonAgregar.addEventListener("click", agregarObra);
function agregarObra() {
    let nombre = document.querySelector("#nombre").value;
    let cantidadLuces = Number(document.querySelector("#luces").value);
    let horasDia = Number(document.querySelector("#horas").value);
    let consumoHora = Number(document.querySelector("#consumo").value);
    let costoKwh = Number(document.querySelector("#costo").value);

    // validar los datos
    if (nombre == "" || cantidadLuces <= 0 || horasDia <= 0 || consumoHora <= 0 || costoKwh <= 0) {
        alert("por favor, complete todos los datos correctamente.");
    } else {
        nombres.push(nombre);
        luces.push(cantidadLuces);
        horas.push(horasDia);
        consumos.push(consumoHora);
        costos.push(costoKwh);

        contador++; 

        // limpia el form
        document.querySelector("#nombre").value = "";
        document.querySelector("#luces").value = "";
        document.querySelector("#horas").value = "";
        document.querySelector("#consumo").value = "";
        document.querySelector("#costo").value = "";

        // una vez cargadas todas las obras
        if (contador == cantidadObras) {
            botonAgregar.disabled = true;
            botonCalcular.disabled = false;
            alert("obras cargadas con éxito");
        }
    }
}

// calcular resultados 
botonCalcular.addEventListener("click", calcular);
function calcular() {
    let consumoTotal = 0; 
    let promedio = 0; 
    let mayorTiempo = horas[0]; 
    let nombreMayor = nombres[0]; 
    let costoMayor = luces[0] * horas[0] * consumos[0] * costos[0]; 

    let contador20 = 0; 
    
    for (let i = 0; i < cantidadObras; i++) { 
        let consumoObra = luces[i] * horas[i] * consumos[i]; 
        consumoTotal = consumoTotal + consumoObra; 

        if (horas[i] > mayorTiempo) { 
            mayorTiempo = horas[i];
            nombreMayor = nombres[i];
            costoMayor = consumoObra * costos[i]; 
        }
        
        if (luces[i] > 20) { 
            contador20++;
        }
    }
    
    promedio = consumoTotal / cantidadObras; 
    let porcentaje = (contador20 * 100) / cantidadObras; 

    // muestra todos los resultados obtenidos
    document.querySelector("#resultado").innerText =
        "consumo diario total: " + consumoTotal + " kWh\n\n" +
        "consumo promedio por obra: " + promedio + " kWh\n\n" +
        "obra con mayor tiempo de funcionamiento: " + nombreMayor + "\n" +
        "costo diario: $" + costoMayor + "\n\n" +
        "porcentaje de obras con más de 20 luces: " + porcentaje + "%";

    botonCalcular.disabled = true; 
    botonReiniciar.disabled = false; 
} 

// reiniciar sistema
botonReiniciar.addEventListener("click", reiniciar);
function reiniciar() {
    location.reload();
}
