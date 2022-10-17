
// desctructuring com objetos pode definir variáveis com propriedade do objeto com uma nova notaçao diferente

let obj = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: 1.9
}


const { rodas: vRodas, portas: vPortas,tetoSolar:vTetosolar,motor:vMotor } = obj;

console.log(obj);
console.log(vRodas)