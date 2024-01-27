//Agrupo datos de un mismo objeto

//POO 
// En JS los objetos son dinamicos
let user = {
    email: 'federico@gmail.com',
    name: 'Federico',
    direccion: {
        calle: '58',
        numero: 361,
    },
    activo: true,
    //Funcion anonima
    recuperarClave: function () {
        console.log('Recuperando clave');
    }, 
};
