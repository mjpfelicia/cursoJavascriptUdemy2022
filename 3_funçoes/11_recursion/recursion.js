// esta função pode ser um problema caso tenha que chama-las varias vezes usa-la em caso especiais




function recursao(number) {
    if (number - 1 < 2) {
        console.log("Recusão parou")
        
    } else if (number % 2 != 0) {
        console.log("Número ímpar " + number);
        recursao(number - 1)
    }
    else {
        console.log("Número ímpar " = number);
        recursao(number - 2)
    }
}


recursao(10);
recursao(5);