function potencia(base, exp = 2) {
    return Math.pow(base, exp)
}


console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));


function repetirFrase(frase, n=2){
    for(let x = 1; x <= n; x++){
        console.log(frase + " " + x);
    }
} 


repetirFrase("repetindo",5);
repetirFrase("Repetindo so duas vezes ");