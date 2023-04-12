// clousere retorna sempre uma função

function lembrarSoma(number) {
    return function (num) {
        return number * num;
    }
}

let soma_1 = lembrarSoma(2);
console.log(soma_1(5));



//  closusere pode ser usada independente 

let soma_2 = lembrarSoma(5);
console.log(soma_2(7))



//  esta função armazena e soma os dados fazendo um contador
function contador(num){
    let cont = num;

    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}


let meuContador = contador(12);
meuContador();
meuContador();
meuContador();
meuContador();