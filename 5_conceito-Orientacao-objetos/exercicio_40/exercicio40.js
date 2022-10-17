

class Conta {
    constructor(saldoContaCorrente = 0, saldoContaPoupanca = 0, jurosPoupanca = 5) {

        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupanca = saldoContaPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    deposito(dinheiro) {
        this.saldoContaPoupanca += dinheiro;
    }

    sanque(dinheiro) {
        this.saldoContaPoupanca -= dinheiro;
    }

    tranferencia(dinheiro) {
        this.saldoContaPoupanca -= dinheiro;
        this.saldoContaCorrente += dinheiro;
    }


    jurosDeAniversario() {

        let jurosPoupanca= (this.saldoContaPoupanca * this.jurosPoupanca) / 100;
        this.saldoContaPoupanca += jurosPoupanca;
    }
}


class ContaEspecial extends Conta {

    constructor(saldoContaCorrente = 0, saldoContaPoupanca = 0, jurosPoupanca = 5) {
        super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca * 2)
    }



}

let conta = new Conta();
let contaEspecial = new ContaEspecial();


console.log(conta);

conta.deposito(1000);
console.log(conta);



conta.sanque(30);
console.log(conta)



conta.tranferencia(500)
console.log(conta)


conta.jurosDeAniversario()
console.log(conta)





// console.log(contaEspecial);

// contaEspecial.deposito(100);

// console.log(contaEspecial);

// contaEspecial.sanque(30);
// console.log(contaEspecial)

// contaEspecial.tranferencia(50)
// console.log(contaEspecial)



