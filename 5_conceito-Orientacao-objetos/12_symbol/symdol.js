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


// não pode ser modificada seu valor
let tamanho = Symbol();
produto.prototype[tamanho] = "grande";


// acesando symbol 

console.log(cadeira)
// acesando o prototupe do produto
console.log(produto.prototype[tamanho]);
// acesando o tamanho 
console.log(cadeira[tamanho]);





