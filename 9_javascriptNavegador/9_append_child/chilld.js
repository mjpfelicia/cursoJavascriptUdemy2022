let novoElemento = document.createElement('p');
let texto = document.createTextNode("Este texto foi add no appendChild depois de um element");


novoElemento.appendChild(texto);

let p =document.querySelector("#paragrafo-principal");
let pai =p.parentNode;


pai.appendChild(novoElemento)
