let obj = {};
let objeto = new Object();
//Propiedad oculta de todos los objetos obj.constructur

/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number(); 12
 * new Boolean(); true false
 */

function Usuario(){
    this.name = "Federico";
}

let user = new Usuario();

console.log(user.constructor);

//Ejemplo de errores cuando usamos literales vs clases objetos

const s1 = "1 + 1";
const s2 = new String("1 + 1");

console.log(s1);
console.log(s2);
console.log("------------");
console.log(s1.constructor);
console.log(s2.constructor);
console.log('-------------');
console.log(eval(s1), eval(s2));
console.log('-------------');
console.log(s1.valueOf());
console.log(s2.valueOf());