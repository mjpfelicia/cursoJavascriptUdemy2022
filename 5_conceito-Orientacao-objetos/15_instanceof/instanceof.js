// herança recebe tudo da classe pode ser usada

class mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new mamifero(4);


console.log(coiote);
console.log(coiote.patas);



class cachorro extends mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca
    }

    latir(){
    console.log("auauauaua")
    }
}


let pug =new cachorro(4,"pug");


console.log(pug);
console.log(pug.patas);
pug.latir();

console.log(new cachorro instanceof mamifero)