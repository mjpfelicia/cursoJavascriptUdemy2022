//  = atribuiçõa
// == comparação
// === idêntico

let idade = 19;

if (idade == 19) {
    console.log("Idade  e  igual a 19");
}

if (idade > 25) {
    console.log("A idade e maior que 25")
}

// usando estrutura de comparação

let nome = "Sandra";

if (nome == "Sandra" && idade >= 19){
    console.log("Neste caso retorna um true e o console.log e liberado")
}


let passaporte= true;
 if((nome == "Sandra" && idade >= 19) || passaporte == true){
    console.log("Neste caso se um lado der true ele considera o true e libera o console.log");
 }