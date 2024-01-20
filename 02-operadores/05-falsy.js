// short-circuit  corta la corriente 

// Falso ver que evalua en falso
// Resultados de la consola
// [] || {}
// []
// [] && {}
// {}

// Primer caso devuelve el primero que evalua en True []
// Segundo caso devuelve el ultimo que evalua en True {}

//Valores para Falso
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = 'Primer nombre';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcon 2');
    return true;
}

let x = fn1() && fn2();