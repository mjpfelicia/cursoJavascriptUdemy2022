// criar uma classe que simula uma conta no banco ; com propriedade saldo ,metodo de deposito saque 

class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }

}


// depositp
let conta = new Conta(1000);
conta.deposito(2000);
console.log(conta.saldo)


// saque
conta.saque(500);
console.log(conta.saldo)

