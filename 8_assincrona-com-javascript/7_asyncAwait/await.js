//  na async functions podemos determinar uma instruçõa await

function somaComDelay(a, b) {


    return new Promise(resolve => {

        setTimeout(function () {
            resolve(a + b);
        }, 4000);
    })


}




async function respostaDaSoma(a, b, c) {
    let x = somaComDelay(a, b);
    let y = c;

    return await x + y;
}



respostaDaSoma(1, 2, 3).then(value => console.log(value));
respostaDaSoma(13, 2, 23).then(value => console.log(value));