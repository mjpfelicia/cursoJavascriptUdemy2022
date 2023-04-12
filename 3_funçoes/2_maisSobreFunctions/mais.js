
// functions esta recebendo valores

function multiplicarTresNumeros(number_1, number_2, number_3) {

    return number_1 * number_2 * number_3;
}

console.log(multiplicarTresNumeros(5, 2, 3));



// guardando o valor dela em uma variável

const mult = multiplicarTresNumeros(5, 2, 1);
const mult2 = multiplicarTresNumeros(5, 2, 2);


console.log(`O valor de mult é ` + mult);
console.log(`O valor de mult é ` + mult2);




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