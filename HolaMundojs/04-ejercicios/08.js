/**
 * Crear un algoritmo que tome un array
 * de objetos y devuelva un array de pares
 */

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Federico',
}, {
    id: 3,
    name: 'Maru',
}, {
    id: 4,
    name: 'Mari',
}];

// [1, { id: 1, name: "Nicolas"}], 

function toPairs(arr) {
    //Defino el array
    let nuevoArray = [];

    for ( key in arr) {
        nuevoArray[key] = [arr[key].id, arr[key]];
    }
    return nuevoArray;
}

let resultado = toPairs(array);
console.log(resultado);

console.log('-------------------------------');

function toPairs2(arr) {
    //Defino el array
    let nuevoArray = [];

    for ( key in arr) {
        nuevoArray.push([arr[key].id, arr[key]]);
    }
    return nuevoArray;
}

let resultado2 = toPairs(array);
console.log(resultado2);