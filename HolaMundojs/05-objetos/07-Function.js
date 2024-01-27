//Las functiones tiene un constructor y se puede reutilizar codigo


function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('Dibujando...');
    }
}

//Nombre de la funcion . call 
//Primer argumento son los this un objeto
//Despues los argumento del llamado call

let punto = { z: 7 }; //Creo un objeto con una propiedad extra
Punto.call(punto, 1, 2); //Call sirve para llamar objetos y poder aumentar su funcionalidad

//Llama a la funcion Punto y le pasa los argumento de {z, x, y, dibujar()}

console.log(punto); //Con todo esto se puede extender objetos y extender funciones los cuales sirven para ver los prototipos

//Todo esto para definir un objeto pasarlo y despues extenderlo

console.log(`-------------`);
//Otra forma es con el metodo apply 
let punto2 = { w: 11 };
Punto.apply(punto2, [1, 2]);

console.log(punto2);


//No es recomendado usar esta meirda

// const Point = new Function('x', 'y', `
// this.x = x;
// this.y = y;
// this.dibujar = function() {
//     console.log('Dibujando...');
// }
// `);

// const p = new Point(1, 2);

// console.log(p);