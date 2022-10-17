// regex que valida endereço de ip
// ex 127.0.0.i

const validarIP = /^[0-9]{3}[.][0-9]{1}[.][0-9]{1}[.]{1}/;


console.log(validarIP.test('127.0.0.1'));
console.log(validarIP.test('12.12.2.1'));
console.log(validarIP.test('12'));
console.log(validarIP.test('asddd'));
console.log(validarIP.test('sss.0.p.s'));


const valIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(valIP.test('127.0.0.1'));
console.log(valIP.test('12.12.2.1'));
console.log(valIP.test('121.122.2.15'));


