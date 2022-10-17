// criar variável ; argumento ; incremento ;

for (let number = 0; number < 50; number++) {

    if ((number % 2) == 0) {
        console.log('aqui eu tenho o valor de ' + number);
    }
}

//  usando while inprime so os number pares
let number = 0;
while (number <= 50) {
    let resto = number % 2;
    if (resto == 0) {
        console.log("Par " + number);
    }
    number = number + 1;
}

//  usando  for inprime e classifica os pares e [impares]
for (let number = 0; number < 50; number++) {
    if (number % 2 == 0) {
        console.log(`O number ${number} é par`);
    } else {
        console.log(`O number ${number} é Ímpar`);

    }
}



