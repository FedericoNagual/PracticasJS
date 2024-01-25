let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
        break;
    case 'guardar':
        console.log('Accion de guardar');
        break;
    default:
        console.log('Accion no reconocida');
        break;
}


//La unica manera para usar 2 controles para cada caso
//Armarndo un true y preguntando por cada parametro
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