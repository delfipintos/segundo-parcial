// array
let curiosidades = [
    "considera sus obras más como arte escénico que visual",
    "utiliza sistemas de reconocimiento facial y vigilancia computarizada con fines críticos. su pieza nivel de confianza consistía en un software entrenado con los rostros de los 43 estudiantes desaparecidos de ayotzinapa.",
    "considera que sus obras no empiezan a existir hasta que el espectador interactúa con ellas",
];

// buttooooons
let button = document.querySelector("#botonCuriosidad"); // cuando el usuario hace click en el botón, se ejecuta la función
button.addEventListener("click", mostrarCuriosidad);

function mostrarCuriosidad(){
    let numero = Math.floor(Math.random() * curiosidades.length); // generando un número al azar según la cantidad de datos curiosos (3) 
    document.querySelector("#dato").innerText = curiosidades[numero];  // mostrar uno de los datos curiosos en la página
}
