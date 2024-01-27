let a = 1;
let b = a;

b++;

console.log(a, b); //A = 1 ; B = 2
console.log("--------------------");

//Prueba con objetos
let objA = {};
let objB = objA;

objB.prop = 1;

console.log(objA); 
console.log(objB);
//Mismos objetos son iguales ambos con 1 propiedad, ya que 
// apuntan al mismo punto de referencia de la memoria


console.log("--------------------");

//Prueba con funciones con varaibles que no son objetos
let numero = 1;

function suma(n) {
    n++;
}

suma(numero);

console.log(numero); //Imprime 1 ya que numero y n son dos variables diferentes para JS

console.log("--------------------");

let numeroObj = { prop: 1 };

function sumaObj(n) {
    n.prop++;
}

sumaObj(numeroObj);
console.log(numeroObj);
//Cambia el valor ya que los objetos siempre se pasan por referencia

// Los tipos de datos primitivos se copian 
// Y los de referencia se crean una referencia (Obj, Array y las funciones)
