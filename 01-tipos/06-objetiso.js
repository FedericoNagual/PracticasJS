//Tipo de dato de referencia

/*
Dejamos de 
lado los datos primitivos
*/

//Personaje
let nombre = "harry"
let saga = "Harry Potter";
let origen = "Inglaterra";
let edad = 25;

let personaje = {
    nombre: "Harry",//Par llave -> valor 
    saga: "Harry Potter",//Puede ser tambien una propiedad
    edad: 25,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['saga']);

personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.saga;

console.log(personaje);