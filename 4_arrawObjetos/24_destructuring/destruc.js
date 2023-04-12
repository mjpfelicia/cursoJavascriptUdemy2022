
// desctructuring com objetos pode definir variáveis com propriedade do objeto com uma nova notaçao diferente

let carro = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: "1.9"
}


const { rodas: vRodas, portas: vPortas,tetoSolar:vTetosolar,motor:vMotor } = carro;

console.log(carro);
console.log(`O carro tem ` + vRodas  +` rodas.`)
console.log(vPortas)