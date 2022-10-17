

//  objeto deletando e criando 
let pessoa = {
  nome: "sandra",
  idade: 46,
  profissão: "Desenvolvedora",
}


console.log(pessoa)
console.log(pessoa.nome);
// deleta 
delete pessoa.profissão;

console.log(pessoa)
//  cria
pessoa.estudante = "javascript"

console.log(pessoa)
