// não podemos add propriedade na class ela so pode ser add via prototype


class produto {
    constructor(nome, descricao, valor) {
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
    }
    barulho() {
        console.log("renkrenkrenk");
    }

}

let cadeira = new produto("Cadeirateste", "Em Azul Detalhe Em Branco..", 1200);

// add propriedades
produto.prototype.detalhe = "gamer";




console.log(cadeira);
console.log(cadeira.detalhe)
cadeira.barulho();




