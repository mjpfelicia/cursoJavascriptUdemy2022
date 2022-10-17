// criar um array aparti de uma frase


let frase = "Esta e uma frase usando o split";
let arryFrase = frase.split(" ");

console.log(frase);
console.log(arryFrase)

for (let frase = 0; frase < arryFrase.length; frase++){
    console.log(`Aqui esta a palavra "${arryFrase[frase]}"`)


}
