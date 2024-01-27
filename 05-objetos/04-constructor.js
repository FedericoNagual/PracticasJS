//El nombre del constructor tiene que ser el nombre del tipo
//Que deseo que cree por ejemplo Usuario

// obj { id: 1, recuperarClave: function(){}}
// UpperCamelCase
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () { //Metodo
        console.log('Recuperar clave');
    }
}

//Se crea un objeto; se vincula un prototipo de la funcion con el obj
//this es el objeto; Si no retorna nada => return this
let usuario = new Usuario();

console.log(usuario);