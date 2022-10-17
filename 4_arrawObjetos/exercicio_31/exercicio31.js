
// crair dois array um com mais de 5 element e o outro menor e verifica o numero de elementos



let frutas = ["pera", "maça", "uva", "banana", "manga"];
let legumes = ["couve", "batata", "tomate"];



function verificar(produtos) {

    if (produtos.length >= 5) {
        console.log("pouco elementos");
    } else {
        console.log("muito elementos");
    }

}

verificar(legumes);
verificar(frutas);