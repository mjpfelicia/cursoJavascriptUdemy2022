// contrutores são forma de instanciar uma clase em uma function


function criarCachorro(raca, patas, cor) {

    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function () {
        console.log("auuuuuauuuu")
    }
    return cachorro
}

let pasto = criarCachorro("Pasto", 4, "preto");
let viralata = criarCachorro("Viralata", 4, "pintado");


console.log(pasto);
pasto.latir();
console.log(viralata);