//validar nome de usuario 
// aceita letra a-z,_e-, e número de 0-9,mínimo de 3 caracteres


let validarNome = /^([A-Za-z]\s?){3,20}$/;
let validarUsuario = /^(?=.{3,16}$)[a-zA-Z0-9-]/;


console.log(validarNome.test("sandra"));
console.log(validarNome.test("sandra felicia de jesus"));
console.log(validarNome.test("sandra@ de jesus"));
console.log(validarUsuario.test("1111111111111111111"));



console.log(validarUsuario.test("sandra"));
console.log(validarUsuario.test("sandra felicia de jesus"));
console.log(validarUsuario.test("sandra@ de jesus"));
console.log(validarUsuario.test("1111111111111111111111"));


