//  criar função que retorna idade maior e menor idade


function validandoIdade(idade) {

   if (idade >= 18){
      console.log(`Vç tem ${idade} ja pode se matricular na auto escola`)
   } else{
      console.log(`Vç so tem ${idade} não pode se matricular na auto escola.`)
   }

 }
validandoIdade(12);
validandoIdade(20);