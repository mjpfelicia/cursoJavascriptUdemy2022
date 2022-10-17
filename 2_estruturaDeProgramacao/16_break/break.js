
let nome = "sandra";

for (let number = 0; number < 10; number = number + 1) {


    if (number == 3) {
        nome = "maria";
    }

    if (number == 5 && nome == "maria") {
        console.log("O nome e maria pode para.");
        break
    }
    console.log(number);
}