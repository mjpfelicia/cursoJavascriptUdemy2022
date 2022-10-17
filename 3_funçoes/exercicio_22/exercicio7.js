//  criar uma função que retorna um número negativo em possitivo
/*
  usando math.abs()
 Retorna o valor absoluto de um número (o valor independentemente de ser positivo ou negativo).
 Por exemplo, o valor absoluto de -5 é o mesmo que o valor absoluto de 5.
 */



function retornaNumeroPositivo(numeroNegativo) {
   return Math.abs(numeroNegativo);
}

console.log(retornaNumeroPositivo(-12));
console.log(retornaNumeroPositivo(-1));
console.log(retornaNumeroPositivo(-155));
console.log(retornaNumeroPositivo(15.55777));
