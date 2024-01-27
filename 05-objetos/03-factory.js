let user = {
    id: 1,
    email: 'federico@gmail.com',
    name: 'Federico',
    activo: true,
    //Funcion anonima
    recuperarClave: function () {
        console.log('Recuperando clave');
    }, 
};

let user1 = {
    id: 1,
    email: 'Nico@gmail.com',
    name: 'Nico',
    activo: false,
    //Funcion anonima
    recuperarClave: function () {
        console.log('Recuperando clave');
    }, 
};
//-------------------------------------------------------------

//Para no repetir se usa
//Usa CamelCase
function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        //Funcion anonima
        recuperarClave: function () {
            console.log('Recuperando clave');
        }, 
    };
}

let user2 = crearUsuario('Nicolas', 'Nicolas@gmail');
let user3 = crearUsuario('Fede', 'Fede@gmail');

console.log(user2);
console.log(user3);