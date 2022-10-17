
// criar um array com 5 nomesverifique se o seu nome esta no array



let nomes = ["Sandra", "Maria", "Flavia", "Pamela"];

console.log(nomes.includes("sandra"));
console.log(nomes.includes("Sandra"));
console.log(`${nomes[0]}  e ${nomes.includes("Sandra")} e esta no array.`);




if (nomes.indexOf("Sandra") != -1) {
    console.log(`O nome ${nomes[0]} foi encontrado`);
} else {
    console.log(`O nome ${nomes[0]} não foi encontrado`);
}


if (nomes.includes("sandra")) {
    console.log(`O nome foi encontrado`);
} else {
    console.log(`O nome não foi encontrado`);
}


