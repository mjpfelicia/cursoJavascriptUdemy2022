


function checarNumeros(num) {

    let number = Number(num);


    if (Number.isNaN(number)) {
        console.log("Por favor passe um Number")
        alert("Por favor passe um Number")

    } else {
        return number;
    }

}

// checarNumeros(5);
checarNumeros('san');


let number = prompt("Digite um número");


checarNumeros(number);
