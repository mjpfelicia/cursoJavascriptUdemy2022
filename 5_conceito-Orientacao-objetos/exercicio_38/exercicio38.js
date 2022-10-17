// cria metodo para tualizar endereço

class Endereco {
    constructor(rua, bairro, cidade, estado,) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;

    }

    //  criando metodo
    set novaRua(novaRuas) {
        this.rua = novaRuas;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }




}

let endereco = new Endereco("qualquer", "qualquer", "são paulo", "sp");

console.log(endereco);

endereco.novaRua = "nova rua";
endereco.novoBairro ="novo bairro";
endereco.novaCidade =" nova cidade";
endereco.novoEstado ="nves";

console.log(endereco)