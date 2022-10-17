// validar data de nascimento


let validarDataDeNacimento = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;


console.log(validarDataDeNacimento.test('25/12/2015'));
console.log(validarDataDeNacimento.test('25/12/15'));
console.log(validarDataDeNacimento.test('5/2/2015'));
console.log(validarDataDeNacimento.test('25/12/1999'));
