// generators onde as ações podem ser pausadas e continuadas depois



function* criadorId() {
    let id = 0;
    while (true) {
        yield id++;
    }

}


let criaId = criadorId();




console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next())
