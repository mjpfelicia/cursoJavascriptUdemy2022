// 
// o prototype de javascript pode ser chamando de classe

let cachorro = {
    raca: "Não Sefinida",
    patas: 4,
    latir: function () {
        console.log("aua uauua");
    }

}

let labrador = Object.create(cachorro);
let pastor = Object.create(cachorro);

labrador.latir();
pastor.latir();


labrador.raca = "Labrador";
pastor.raca = "Pasto Alemão";


console.log(pastor.raca);
console.log(`este cachorro e da raça ${pastor.raca}`);

console.log(cachorro.raca);
console.log(`Este cachoro e de uma raça ${cachorro.raca}`);


console.log(labrador.raca);
console.log(`Este cachorro e da raça  ${labrador.raca}`);