
let num = 41;
let divisor = 0;

for (let number = 1; number <= num; number++) {

    if (num % number == 0) {
        divisor++
    }
}

if (divisor == 2) {
    console.log(`O number ${num} è primo`)
} else {
    console.log(`O number ${num} não e primo.`)
}



