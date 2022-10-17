// uma expreção que aceita digitos



const umOuMaisDigito = /\d+/;


console.log(umOuMaisDigito.test("1234"));
console.log(umOuMaisDigito.test(" "));
console.log(umOuMaisDigito.test("12sesas3"));
console.log(umOuMaisDigito.test("12sesas35555555555555555555"));

