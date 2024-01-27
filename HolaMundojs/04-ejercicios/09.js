let pairs = [
    [1, { name: "Nicolas"}],
    [2, { name: "Federico"}],
    [3, { name: "Fernandez"}],
];

let array = [{
    id: 1,
    name: 'Nicolas',
},{
    id: 2,
    name: 'Federico',
}, {
    id: 3,
    name: 'Fernandez',
}];

function toCollection(arr){
    let coleccion = [];
    for (idx in arr) {
        let elemento = arr[idx];
        coleccion[idx] = elemento[1];
        coleccion[idx].id = elemento[0];
    }

    return coleccion;
}

let resultado = toCollection(pairs);
console.log(resultado);