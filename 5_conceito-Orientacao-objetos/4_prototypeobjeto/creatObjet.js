// 
const gato = {
    raca: "sem raça",
    cor: "pardo",
    tamanho:"grande",
    idade:"2 anos"

}

// console.log(Object.getPrototypeOf(gato));
// console.log(Object.getPrototypeOf(gato) === Object.prototype);
// console.log(gato.hasOwnProperty("cor"));

// console.log(gato.valueOf(""));




const novoGato = Object.create(gato);

console.log(novoGato.cor);

console.log(novoGato.hasOwnProperty("cor"));


console.log(Object.getPrototypeOf(gato) === gato);



