// expreçoes regular diferente,metodo diferente 

const reg1 = new RegExp('bola');

const cep = new RegExp(/[0-9]{5}-[0-9]{3}/);
const dataNasc = new RegExp(/\d\d\/[0-9]{2}\/[0-9]{4}/);

const inputCep = "10/10/2022"

console.log(dataNasc.test(inputCep));


// console.log(reg1.test("Tem bola"));

// console.log(reg1.test("não tem"));


// // destaforma
// const reg2 = /bola/;

// console.log(reg2.test("Tem bola"));
// console.log(reg2.test("não tem"));


// // em uma variável
// let text = 'Tem bola na cesta';
// console.log(reg2.test(text));

// // desta forma
// console.log(/quadrado/.test("Onde tem um quadrado"));
// console.log(/quadrado/.test("666666 quadrado 121222"));