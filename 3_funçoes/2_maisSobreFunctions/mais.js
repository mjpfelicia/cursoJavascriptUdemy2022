
// functions esta recebendo valores

function multiplicarTresNumeros(number_1, number_2, number_3) {

    return number_1 * number_2 * number_3;
}

console.log(multiplicarTresNumeros(2, 2, 3));



// guardando o valor dela em uma variável

const mult = multiplicarTresNumeros(5, 2, 1);

console.log(`O valor de mult é ` + mult);



// funcion recebendo prâmetro

function podeDirigir(idade, cnh) {

    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir")
    } else {
        console.log("Não pode dirigir")
    }
}
podeDirigir(19,true);
(15,false)