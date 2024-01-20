
//Argumentos y parametros
function suma(a) {
    return a + 2; //Parametro a
}

resultado = suma(5); //Argumento 5 

console.log(resultado);

function sumamos(a, b){
    return a + b;
}

resultados = sumamos(5, 5);
console.log(resultados);

function sumaMuchos(a, b) {
    console.log(arguments); //Referenciaa todos los parametros pero no es la manera mas recomendada.
    return a + b;
}

let superSuma = sumaMuchos(5, 6, 1, 2, 3, 4);
console.log(typeof sumaMuchos);