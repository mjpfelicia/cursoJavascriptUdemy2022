
// criar um array com 5 elementos fazer uma interação com eles imprima no console.lofg




let cores = ["Verde", "Amarelo", "Azul", "Branco"];

// function recebendo parametro

function imprimir(cor) {
    console.log(` Esta cor e ${cor}`);
}

cores.forEach(imprimir);

// outro jeito de fazer usando forEach

cores.forEach(cor => {
    console.log(` Esta cor e ${cor} e esta sendo execultada na function ForEach.`);

})

// outro jeito de fazer usando for


for (let cor = 0; cor < cores.length; cor++){
    console.log(`Esta cor e ${cores[cor]} e esta sendo execulcada na function For.`)

}


