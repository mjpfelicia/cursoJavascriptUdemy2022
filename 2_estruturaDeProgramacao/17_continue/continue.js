
// cria a váriavel ; qual a condição     ;  add o incremento
for (let number = 10; number > 0; number = number - 1) {

    if (number % 2 == 0){
        console.log("caiu no continue number e par")
        continue;
    }
    console.log(number);
}

for (let number = 10; number > 0; number = number - 1) {

    if (number % 2 == 1){
        console.log("caiu no continue number e inpar")
        continue;
    }
    console.log(number);
}