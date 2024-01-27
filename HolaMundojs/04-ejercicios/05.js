/**
 * Algoritmo que devuelva los numeros menos y mayor de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

// Mal realizado el for in mal usado
function getMenorMayor(arr){
    resultado = [0,0];
    for (let iterator in arr) {
        // console.log(arr[iterator])
        //Pregunto por menor
        if (arr[iterator] <= resultado[0]){
            resultado[0] = arr[iterator];
        }
        //Pregunto por mayor
        if (arr[iterator] >= resultado[1]) {
            resultado[1] = arr[iterator];
        }
    }
    return resultado;
}

let numeros = getMenorMayor(array);
console.log(numeros);

function getMenorMayor2(arr){
    resultado = [0,0];
    for (let iterator in arr) {
        // console.log(arr[iterator])
        //Pregunto por menor
        if (iterator <= resultado[0]){
            resultado[0] = iterator;
        }
        //Pregunto por mayor
        if (iterator >= resultado[1]) {
            resultado[1] = iterator;
        }
    }
    return resultado;
}

let numeros3 = getMenorMayor2(array);
console.log(numeros);

function getMenorMayorMundo(arr){
    let menor = arr[0];
    let mayor = arr[0];

    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
}

let numeros2 = getMenorMayorMundo(array);
console.log(numeros);