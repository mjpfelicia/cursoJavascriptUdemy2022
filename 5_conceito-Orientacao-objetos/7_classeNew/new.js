// classe: constutot por new tem a posibilidade de instaciar um objeto com new no js

function cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function () {
        console.log("auuuuuuu");
    }
}


let pasto = new cachorro("Pasto", 4, "preto");
pasto.latir();

console.log(pasto.raca)


