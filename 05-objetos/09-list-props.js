
//Objeto definicion
const punto = {
    x: 10,
    y: 15,
    dibujar: function () {
        console.log('dibujando ...');
    },
    otraFuncion() {
        console.log('Otra funcion');
    }
};
//delete punto.dibujar;

//Verificar si un objeto tiene un metodo o propiedad en particular
if ('dibujar' in punto){
    punto.dibujar();
}

console.log(Object.keys(punto)); //Nos devuelve un Array con las propiedades de un objeto

//Imprimir y listar todas la propiedades y las funciones
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

console.log("--------------------");

//Hace lo mismo pero arma un par [propiedad, valor]
for (let entry of Object.entries(punto)){
    console.log(entry);
}

//Todo esto para ver los valores de los objetos que no sabemos que propiedades tiene

console.log("--------------------");
//Como ultima opcion y la que hay que usar seria con 
for (let llave in punto) {
    console.log(llave, punto[llave]);
}