
// verifica um número na frase

const reg1 = /[12345]/;

console.log(reg1.test("temos o número 6"));
console.log(reg1.test("temos o número 2"));
console.log(reg1.test("temos o número 60"));
console.log(reg1.test("temos o número 23"));


const reg2 = /[0-9]/;

console.log(reg1.test("temos o número 65"))
console.log(reg1.test("temos o número"))