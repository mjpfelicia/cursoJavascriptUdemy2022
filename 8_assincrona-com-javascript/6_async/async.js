

// Async functions pode crair funções com a palavra reservada async
// ela retorna uma Promise



async function somar(a, b) {
    return a + b;
}


somar(2,2).then(function(value){
    console.log(value);
});

somar(2,3).then(value => console.log(value));

console.log(somar(10,20))

