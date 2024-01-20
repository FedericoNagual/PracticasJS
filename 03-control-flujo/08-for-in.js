//Iterar las propiedades de un objeto sin saber cuales son

let user = {
    id:1,
    name: 'Pibe',
    age: 25,
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}

console.log('------------------');

let animales = ['Perro', 'Gato', 'Pato'];

for (let indice in animales) {
    console.log(indice, animales[indice]);
}
//Mejor usar un For of para este codigo y mostrar un arreglo 