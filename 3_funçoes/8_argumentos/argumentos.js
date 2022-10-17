function soma(number_1, number_2) {

    if (number_1 === undefined || number_2 === undefined) {
        console.log("Esta função precisa de dois argumentos");


    } else {
        return number_1 + number_2;
    }

}

// passou os dados sem os doi parãmetro
console.log(soma(1));

// passou os doi parâmetro correto
console.log(soma(1, 2));


function saudacao(nome, idade) {
    if (idade === undefined) {
        console.log(" olá "  +   nome)
    } else {
        console.log("olá "  +  nome  +  " voçê tem "  +  idade  +  " anos ");
    }
}
  saudacao("sandra");
  saudacao("sandra",20);