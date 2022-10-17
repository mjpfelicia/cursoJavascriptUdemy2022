
// faz com que o codico anterior seja opcionla



const padrao = /abacax?i/;


console.log(padrao.test("abacaxi"));
console.log(padrao.test("abacai"));
console.log(padrao.test("123 "));



const padrao2 = /\d+\w?/;


console.log(padrao2.test("123"));
console.log(padrao2.test("1222abacai"));
console.log(padrao2.test("123 "));

