



const dia = /\d\d/;

console.log(dia.test("2020") && "2020".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("20") && "20".length == 2);
console.log(dia.test("2asd1"));





const palavrasComPeloMenosTresLetras = /\w\w\w/;


console.log("Palavras com 3 letras");

console.log(palavrasComPeloMenosTresLetras.test("asd"));
console.log(palavrasComPeloMenosTresLetras.test("asdd"));
console.log(palavrasComPeloMenosTresLetras.test("as"));

