//  assertions  verificaçôes no programa que são utilizadas para assegura quae todo ocoora da forma esperada


let arr = [1, 2, 3, 4];
let arr2 = [];


function iterarArray(arr) {

    if (arr.length == 0) {
        throw new Error(" O array precisa ter pelo menos um elemnto")
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(i)
        }
    }

}




function arrayVazio(arr) {

    if (arr.length > 0){
        throw new Error(" O array não pode ter elemento")

    }else{
        console.log("Agora deu certo")
    }

}



iterarArray(arr);
iterarArray(arr2);