
//  criar um abjeto  com propriedades e deletar propriedade roas

let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2

}


delete onibus.rodas;

onibus.janelas = 20;
onibus.baneiro = 1;
onibus.assentoEspecial = 6;

console.log(onibus);
console.log(onibus.janelas);
console.log(`Esse ônibus possui ${onibus.assentoEspecial} assentos especiais.`);


