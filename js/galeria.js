// arrays
let nombres = [ 
  "pulse room",
  "vectorial elevation",
  "33 questions per minute",
  "body movies",
  "presencia inestable" // agregar después en obras.html
]; 

let anios = [ 
  2006,
  1999,
  2000,
  2002,
  2018
];

let imagenes = [ 
  "img/lozano-hemmer-3.jpg",
  "img/vectorial-elevation.jpg",
  "img/questions-minute.jpg",
  "img/body-movies.jpg",
  "img/lozano-hemmer-2.jpg"
];

let descripciones = [ 
  "pulse room traduce los latidos cardíacos de los visitantes en pulsos de luz. cada persona modifica la instalación mediante su propia frecuencia cardíaca.",
  "los participantes controlaban reflectores gigantes por internet para crear composiciones de luz sobre la ciudad.",
  "una computadora genera y muestra preguntas continuamente, explorando la relación entre inteligencia artificial y lenguaje.",
  "la obra utiliza sombras proyectadas por los visitantes para revelar retratos de personas sobre edificios.",
  "ofrece una nueva perspectiva sobre sus “antimonumentos” y sus dimensiones poéticas y políticas." // agregar después en obras.html 

];

let galeria = document.querySelector("#galeria");
for (let i = 0; i < nombres.length; i++) { // agrega una obra a la galería
    galeria.innerHTML +=
   "<article>" +
    "<h2>" + nombres[i] + "</h2>" +
    "<p>año: " + anios[i] + "</p>" +
    "<img src='" + imagenes[i] + "' alt='" + nombres[i] + "'>" +
    "<p>" + descripciones[i] + "</p>" +
    "</article>";
}

let botonCambiar = document.querySelector("#botonCambiar"); // cuando el usuario hace click, se ejecuta la función
botonCambiar.addEventListener("click", cambiarDiseno);

function cambiarDiseno() {
    let fotos = document.querySelectorAll("#galeria img"); // guardar imagenes
    for (let i = 0; i < fotos.length; i++) { // cambiar tamaño
        fotos[i].style.width = "20rem";
    }
}
