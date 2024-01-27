/**
 * indice validar que no sea menor a cero y que el elemento exista 
 * en el array
 */

function getbyIdx(arr, idx) {
    let i = 0;
    if ( arr.length <= idx || idx < 0) {
        return 'El indice esta excedido del rango o es igual a cero';
    } else {
        return arr[idx];
    }
}

let resultado = getbyIdx([1, 2], 3);
console.log(resultado); 

resultado = getbyIdx([1, 2], 1);
console.log(resultado);

// let arreglo = [1,2,3];
// console.log(typeof arreglo[1]);//number
// console.log(typeof arreglo[5]);//undefined