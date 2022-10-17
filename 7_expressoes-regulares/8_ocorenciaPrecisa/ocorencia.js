const cep = /\d{5}-\d{3}/;

console.log(cep.test("9732414190"));
console.log(cep.test("23456-300"));



const telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test("9732414190"));
console.log(telefone.test("(11)9732414190"));
console.log(telefone.test("(11)97324-1419"));
console.log(telefone.test("23456-300"));