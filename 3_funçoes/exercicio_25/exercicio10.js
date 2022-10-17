// crian um função que retorna um loop  e imprima numeros pares  e impares no console


function passandoPelosPares(num) {

    for (let number = num; number >= 0; number--) {

        if ((number % 2) == 0) {
            console.log(`O valor e [${number}] ele e par.`);
        } else {
            console.log(`O valor e [${number}] ele e impar.`);
        }
    }
}

passandoPelosPares(10);


function imprimePares(num) {

    for (let number = 0; number < num; number++) {

        if ((number % 2) == 0) {
            console.log(`O valor e [${number}] ele e par.`);
        }
    }
}

imprimePares(10);




