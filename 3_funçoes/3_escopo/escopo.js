
// não altera o valor das variáveis com o mesmo nome;
let number = 10;


function imprimirEscopo(){
    let number =150;
    console.log(number)
}

imprimirEscopo();


console.log(number)