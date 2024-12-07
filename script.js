const arrayElecciones = ["piedra", "papel", "tijera"];

const eleccionJuego = Math.floor(Math.random() * arrayElecciones.length);

const opcionJuego = arrayElecciones[eleccionJuego];

console.log(opcionJuego);