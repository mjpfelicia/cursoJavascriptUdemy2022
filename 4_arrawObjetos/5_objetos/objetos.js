// []  refere-se  a um array ;
// {} refere_se a um objeto;


let cachorro = {

  nome: "Pitu",
  patas: 4,
  cor: "preto",
  latir: function () {
    console.log("au , au ,au" + ` e o seu latido`)
  }

}

console.log(cachorro.nome +` e o nome do cachorro`);
console.log(`ele tem ` + cachorro.patas +` patas`);
console.log(`e sua cor e ` + cachorro.cor);
cachorro.latir();
