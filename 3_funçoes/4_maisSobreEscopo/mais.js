//  so esta alterando o escopo do if 



let number = 10;

if (number > 5) {
    let number = 20;
    number++;
    console.log(`Este e da variavel de dentro `+ number)
}


console.log(`Este e da variavel de fora  ` +  number);
