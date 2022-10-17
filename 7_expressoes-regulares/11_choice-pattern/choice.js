
// podemos colocar uma instrução na regex que funciona como um || (or) das condicionais


let frutas = /\d+ (banana|maça|laranja)/;

console.log(frutas.test("10 banana"));
console.log(frutas.test("25 batata"));
console.log(frutas.test("10 banana"));
console.log(frutas.test("8 laranja"));



const nome = /\w+: (Sandra|maria|bia)/;



console.log(nome.test("Nome: Sandra"));
console.log(nome.test("Nome: sandra"));