/**
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

//ejemplo 1366 x 2000 es HD, ambos necesitan pasar el minimo para la resolucion

function nombreResolucion(ancho, alto) {
    let resultado = '';
    switch (true) {
        case (ancho >= 7680) && (alto >= 4320):
            resultado = '8K';
            break;
        case (ancho >= 3840) && (alto >= 2160):
            resultado = '4K';
            break;
        case (ancho >= 2560) && (alto >= 1440):
            resultado = 'WQHD';
            break;
        case (ancho >= 1920) && (alto >= 1080):
            resultado = 'FHD';
            break;
        case (ancho >= 1280) && (alto >= 720):
            resultado = 'HD';
            break;

        default:
            resultado = 'No llega a ser ni HD';
            break;
    }
    return resultado;
}

let nombre = nombreResolucion(0, 0);
console.log(nombre);
nombre = nombreResolucion(800, 720);
console.log(nombre);
nombre = nombreResolucion(1380, 800);
console.log(nombre);
nombre = nombreResolucion(2000, 1100);
console.log(nombre);
nombre = nombreResolucion(2580, 1500);
console.log(nombre);
nombre = nombreResolucion(3900, 2180);
console.log(nombre);
nombre = nombreResolucion(8000, 4500);
console.log(nombre);