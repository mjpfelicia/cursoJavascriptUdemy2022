"user Strict"

opa = 'teste';

delete Object.prototype;



//   erro no console log
// function teste() {
//     "use strict"
//     testando = 'teste';
// }
// teste();


// arrumando erro
function teste() {
    "use strict"
    let testando = 'teste';
}
teste();


// não pode criar propriedade no tipo primitivo 

false.prop = "";
"teste".prop = "";