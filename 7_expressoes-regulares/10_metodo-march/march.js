  
// o método match funciona de forma similar ao exec

const frase = " O número 100 está aqui".match(/\d+/);
const frase2 = "O número está aqui".match(/\d+/);
const frase3 = "eeeeee 100".match(/\d+/);



console.log(frase);
console.log(frase2);
console.log(frase3)