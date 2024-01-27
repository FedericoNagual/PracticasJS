const user = { id: 1};

//Si se puede agregar y eliminar propiedades pero no se puede modificar
user.name = 'Federico';
user.guardar = function () {
    console.log('Guardando Nombre');
}

delete user.id;

console.log(user);

//Congela el valor del objeto y no se puede modificar ni eliminar
const user1 = Object.freeze({ id: 1});
user1.name = 'Fede';
user1.id= 2;
console.log(user1);

//Si deseo cambiar el valor de una propiedad podemos usar
const user2 = Object.seal({ id: 1});
user2.id= 2;
console.log(user2);
