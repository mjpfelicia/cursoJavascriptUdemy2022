
// podemos converte o json em uma string


let pessoa = {
    nome: "sandra",
    idade: 46,
    sexo: "feminino"
}

// forma de passa jsom para estrig
let pessoaTesto = JSON.stringify(pessoa);



// forma de passa string para json
let pessoaJson = JSON.parse(pessoaTesto);


console.log(pessoaTesto);
console.log(pessoa);
console.log(pessoaJson)



