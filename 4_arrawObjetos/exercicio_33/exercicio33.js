// criar um array aparti de uma frase


let frase = "Esta e uma frase usando o split";
let arryFrase = frase.split(" ");

console.log(frase);
console.log(arryFrase)

for (let frase = 0; frase < arryFrase.length; frase++){
    console.log(`Aqui esta a palavra "${arryFrase[frase]}"`)


}




let pessoa={
    "name": "Sandra",
    "age":"47",
    "role":"programadora"
}


console.log(pessoa.name);
console.log(pessoa.age);
console.log(pessoa.role)