/**
 * Crear un algoritmo que devuelva 
 * la cantidad de numeros positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let cantidad = 0;
    for (elemento of arr) {
        cantidad = elemento > 0 ? cantidad+1 : cantidad;
    }
    return cantidad;
}

let resultado = cuantosPositivos(array);

console.log(resultado);