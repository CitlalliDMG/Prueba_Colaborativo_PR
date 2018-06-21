//Pregunta nombre y apellido
var name = prompt("¿Cuál es tu nombre y apellido?");

//Obteniendo la primera inicial
var firstInitial = name.slice(0,1);

//Buscando la posición de la segunda inicial
var secondInitialPosition = name.indexOf(" ") + 1;

//Buscando la segunda inicial
var secondInitial = name.slice(secondInitialPosition, secondInitialPosition+1)

//Mostrando iniciales
document.write("Tus iniciales son " + firstInitial.toUpperCase() + secondInitial.toUpperCase());