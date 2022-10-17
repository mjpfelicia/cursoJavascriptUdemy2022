
let elementoPai = document.querySelector('#container-principal');
let elementoAlvo = document.querySelector('#titulo-principal');


let novoTexto = document.createTextNode("Este texto foi add no InsertBefore antes de um element");




let novoElemento = document.createElement('p');

let novotitulo = document.createElement('h3');
novoElemento.appendChild(novoTexto);



elementoPai.insertBefore(novoElemento, elementoAlvo);
elementoPai.insertBefore(novotitulo, novoElemento);



