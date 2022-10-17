// método que rebebe propriedades que serve como funões

const gato = {
    raca: "sem raça",
    cor: "pardo",

    miar: function () {
        console.log("miauuuuu");
    },
    dormi: function () {
        console.log("ruuuuuuummm")
    },
    setRaca: function (raca) {
        this.raca = raca;
    },

    getRaca: function () {
        return "O gato tem uma nova raça " + this.raca;
    },

    setCor: function (cor) {
        this.cor = cor;
    },
    getCor: function () {
        return "Ele tem a cor " + this.cor;
    }



}
gato.setRaca('Nova raça');
gato.setCor('Nova cor');



console.log(gato.cor);
console.log(gato.getCor());




console.log(gato.raca);
console.log(gato.getRaca());