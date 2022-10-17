//Override nas propriedades do prototype sempre que adicionamos uma propreiedde a um objto e criada uma identica no preototype


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


// foi criado outro produto
produto.prototype.nome = "Mesa";


console.log(produto.prototype.nome);
console.log(cadeira.nome);






