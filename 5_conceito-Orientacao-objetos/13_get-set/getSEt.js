// get serve para restagar o valor de uma propriedade
// set serve para altera o valor de uma propriedade

class produto {
    constructor(nome, descricao, valor, cor) {
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.cor = cor;
    }
    barulho() {
        console.log("renkrenkrenk");
    }


    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor
    }

}
let mesa = new produto("Mesa de granito", "Comm detalhes rosas", 1200, "cor não definida");


// set altera o valor
mesa.setCor = "Preta";



console.log(mesa);
//  get busca o valor 
console.log(mesa.getCor);