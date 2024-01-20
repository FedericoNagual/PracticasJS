//Do While Evalua la condicion al final

//Cuales son los numeros pares hasta 10
let i = 0;
// while (i < 10) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }

//Se ejecuta al menos 1 vez antes de preguntarse la condicion
do {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
} while (i < 10);