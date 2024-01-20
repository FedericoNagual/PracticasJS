// uno continua y el otro corta la ejecucion cuando encuentra un valor

let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        console.log('Esquivo el num 2');
        continue;
    }
    if (i === 4){
        console.log('Encontre lo que buscaba!');
        break;
    }
    console.log(i);
}