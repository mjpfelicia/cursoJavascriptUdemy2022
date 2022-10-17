// poeder ser criado erro no programa caso alguma condição não seja atendida


function saudacao(nome) {
    if (typeof nome != 'string') {
        throw new Error(" O parametro nome precisa ser uma string");
    } else {
        console.log(`Olá ${nome}.`)
    }


}


saudacao("Sandra");
saudacao(5);


console.log("teste")