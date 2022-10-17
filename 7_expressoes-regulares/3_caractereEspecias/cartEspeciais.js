
// caracter ponto aceita qualquer coisa,tudo


const pontoRegex = /./;

console.log("[.] aceita qualquer coisa");
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("1234"));
console.log(pontoRegex.test("12345asd"));


// caracter d aceita numérico 
// [0-9] e a mesma coisa
const dRegex = /\d/;

console.log("[d] aceita numérico");
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("1234"));
console.log(dRegex.test("12345asd"));



// aceita a primeira expreção
const dRegex2 = /\D/;


console.log("[D] primeira expreção");

console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("1234"));
console.log(dRegex2.test("12345asd"));



//  s para espaço  vazio quebra de linha
const sRegex = /\s/;

console.log("[s] aceita qualquer digito");

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("1234"));
console.log(sRegex.test("12345asd"));






const wRegex = /\w/;

console.log("[w] aceita números e letras");

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("1234"));
console.log(wRegex.test("12345asd"));


