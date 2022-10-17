const carro1 = {
    cor: "vermelhol",
    marca: "fuat",
    gasolinaRestante: 20,
    dirigir: function (km) {
        const gasolinaConsumida = km / this.consumoPorKilometro;
        this.gasolinaRestante -= gasolinaConsumida;

    }


}






class Carro {
    constructor(marca, cor, gasolinaRestante, consumoPorKilometro) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumoPorKilometro = consumoPorKilometro;

    }


    // metodo dirigir
    dirigir(KM) {

        let gasolinaConsumida = KM / this.consumoPorKilometro;
        this.gasolinaRestante -= gasolinaConsumida;

    }

    // metodo abastecer

    abastecer(receberGalosina) {

        this.gasolinaRestante += receberGalosina;

    }

}

let carro = new Carro("fiat", "vermelho", 103, 14);
let carro2 = new Carro("fiat", "vermelho", 103, 14);


console.log(carro);

carro.dirigir(100);
console.log(carro)

carro.abastecer(5);
console.log(carro)




