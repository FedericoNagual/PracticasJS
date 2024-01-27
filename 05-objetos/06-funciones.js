
//Las funciones en JS son considerados objetos de primera clase
function Usuario(nombre) {
    this.nombre = nombre;
}

//Las funciones tambien tienen propiedades
//Nombre de la funcion
console.log(Usuario.name);
//Cantidad de argumentos
console.log(Usuario.length);

//Las funciones se pueden asignar a constantes y a variables
const U = Usuario
let user = new U('Federico');

console.log(user);
console.log(`-----------------`);

// Como pasar una funcion como argumento

//A esta funcion le tendria que pasar una funcion y cuando 
// ejecute el new tiene que llamar al Usuario como un new Usuario()
function of(Fn, argumento) {
    return new Fn(argumento);// new Usuario(argumento);
}

let user1 = of(Usuario, 'Nicolas');
console.log(user1);

// Las funciones pueden ser retornadas en JS
function returned() {
    return function() {
        console.log('Hola mundo');
    }
}

//Ejecutamos la funcion y la cargamos en let saludo
let saludo = returned();
saludo(); //Al ser una funcion se puede ejecutar