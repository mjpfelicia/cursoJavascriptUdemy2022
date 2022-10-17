// validamdo email  da seguinte forma ;

let validaraemail = /\w+@\w+\.\w+/;


console.log(validaraemail.test("teste@email.com"));
console.log(validaraemail.test("teste@email"));
console.log(validaraemail.test("teste@email.com.br"));
console.log(validaraemail.test("email.com"));


