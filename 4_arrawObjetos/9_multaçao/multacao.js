//  conseito de multabilidade 
let pessoa = {
  nome: "sandra",
}

let pessoa_2 = pessoa;

let pessoa_3 = "sandra";


console.log(pessoa == pessoa_2);
console.log(pessoa_3 == pessoa_2)
console.log(pessoa_2 == pessoa);
console.log(pessoa_3)




pessoa_2.nome = "mudança de nome";

console.log(pessoa)

pessoa.nome = "mudança de nome-2"

console.log(pessoa_2)