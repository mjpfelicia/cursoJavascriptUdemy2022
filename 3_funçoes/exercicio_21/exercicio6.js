//  criar função que retorna idade maior e menor idade


function validarTipoDeDados(dados) {
   console.log(`Este e um dado do tipo ${dados}.`)
}

console.log(validarTipoDeDados(typeof (4)));
console.log(validarTipoDeDados(typeof "sandra"));
console.log(validarTipoDeDados(typeof true));



function validarDados(dados) {
   if (typeof dados == "string") {
      console.log(`O nome ${dados} e do tipo string`)
   } else if (typeof dados === "number") {
      console.log(`Este e um ${dados} ele e do tipo number`)
   } else {
      console.log(`Este e um ${dados} ele e um booleans`)
   }
}


validarDados(6);
validarDados("sandra");
validarDados(false);