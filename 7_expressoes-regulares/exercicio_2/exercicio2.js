// validar string que termina com id

let validarId =/\d+ID\b/;


console.log(validarId.test("122333ID"));
console.log(validarId.test("sandrID"));
console.log(validarId.test("ID"));

