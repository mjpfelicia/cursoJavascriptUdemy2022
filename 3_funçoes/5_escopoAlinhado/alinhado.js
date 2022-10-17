let number = 10;


function multiplicar(number_1, number_2) {

        let number = number_1 * number_2;


    if (number > 10) {

        let number = 0;
        number++;

        console.log("Esta variável e do if " + number)

    }

    console.log("Esta variável e da function " + number);
}

console.log("Esta variável e global " + number)

multiplicar(3, 7)