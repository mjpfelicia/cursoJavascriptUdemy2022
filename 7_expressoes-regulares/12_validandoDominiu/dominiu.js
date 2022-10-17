// da seguinte forma podemos validar um domínio



let validarDiminiu = /[?www.]\w+\.com|com.br/;


console.log(validarDiminiu.test("www.google.com"));
console.log(validarDiminiu.test("www.teste"));
console.log(validarDiminiu.test("teste.com"));
console.log(validarDiminiu.test("www.horadecodar.com.br"));
console.log(validarDiminiu.test("horadecodar.com.br"));

