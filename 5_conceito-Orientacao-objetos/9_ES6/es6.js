// na versão ES6 ha uma posibilidade de criar um class (objto)com construro

class pessoa {
    constructor(nome, idade, genero) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;

    }
}


let mulher = new pessoa("sandra", 46, "feminino");
let homem = new pessoa("Jose", 422, "masculino");


console.log(mulher);
console.log(homem);





class produto {
    constructor(nome, descricao, valor) {
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;


    }
}



let cadeira = new produto("Cadeirateste", "Em Azul Detalhe Em Branco..", 1200);

console.log(cadeira)




