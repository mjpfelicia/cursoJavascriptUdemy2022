let number = 1;
let number1 = 12;
let number2 = 3;
let number3 = 113;


function imprimiNumber(...args) {

    for (let num = 0; num < args.length; num++){
        console.log(args[num]);
    }

 }

 imprimiNumber(number,number1,number2,number3); 
 console.log("pausa");
 imprimiNumber(number,number3);
 console.log("pausa");

 imprimiNumber(1,2,3,4,5,6);