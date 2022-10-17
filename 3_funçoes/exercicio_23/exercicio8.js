//  crianfunção que limita o númeor de caracteris nas palavras

function validaTamanhoDePalavras(palavra) {
    if (palavra.length >= 10) {
        console.log(`A palavra "${palavra}" e muito grande.`)
    } else {
        console.log(`a palavra "${palavra}" esta no tamanho correto.`)

    }

}

validaTamanhoDePalavras("maria");
validaTamanhoDePalavras("mariiiiiiiiijjjjjj");
validaTamanhoDePalavras("mmmmmmm");



