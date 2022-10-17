//  obloco try catch vai tentar executar um códico caso não consiga.
// ele pode retorna o erro que esse códico gerou
// ele não para a funcion


// let b = 2;

try {

    let a = 2 + b;

} catch (erro) {

    console.log("Algo deu errado. " + erro);

} finally{
    
    console.log("Executou");
}

console.log("Mesmo caindo ele execultou o códico");


