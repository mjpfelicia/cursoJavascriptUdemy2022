// criar função que retorna número aleatorio





function garaNumeroAleatorio(number) {
   return Math.floor(Math.random() * number) + 1;
}


console.log(garaNumeroAleatorio(2));
console.log(garaNumeroAleatorio(100))
console.log(garaNumeroAleatorio(50))