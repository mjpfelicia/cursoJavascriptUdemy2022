function imprimirNoConsole() {
    console.log("Aqui esta sua uma função")
}

imprimirNoConsole();


// Aqui a function recebe um número como parametro

function imprimirNumero(number) {
    console.log(`O Número ${number} foi passado como parametro em uma funtion.`)
}

imprimirNumero(2);
imprimirNumero(22);
imprimirNumero(2222);

//  quardando o valor em uma variável

const numerosAleatorios = function () {
    console.log(`O valor aleatório é: ` + Math.random());
}


numerosAleatorios();
numerosAleatorios();