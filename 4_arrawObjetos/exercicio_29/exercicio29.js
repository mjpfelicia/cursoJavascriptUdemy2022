
//  criar um abjeto  com propriedades e deletar propriedade roas

let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2

}


delete onibus.rodas;

onibus.janelas = 20;
onibus.baneiro = 1;

console.log(onibus);
console.log(onibus.janelas);


