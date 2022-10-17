let novoElemento = document.createElement('p');
let texto = document.createTextNode("Este texto foi trocado por replace");


novoElemento.appendChild(texto);

let heading = document.querySelector("#titulo-principal");
let paiHeading = heading.parentNode;


paiHeading.replaceChild(novoElemento, heading);
