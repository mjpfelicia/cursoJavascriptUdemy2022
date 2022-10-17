// além das propriedasde podemos crair a classe base ja com o método assim o códico fica mais visível

function cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;

}

cachorro.prototype.latir = function () {
    console.log("auuuuuuiiiiii");
}
cachorro.prototype.correr = function () {
    console.log("xekxekxekxekxe")
}

let pasto = new cachorro("Pasto", 4, "preto");
pasto.latir();
pasto.correr();

console.log(pasto.raca)


