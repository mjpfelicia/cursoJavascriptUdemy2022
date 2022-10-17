
let carro = {
  modelo: "Fiat",
  ano: 2021,
  cor: "Prata"
}
let adicionais = {
  banco: "Couro",
  moto: 2.9,
  dono: "Unico",
  teto:"solar",
  ar:"Arcondicionado"
}

console.log(carro);

// addciona o objeto adicionais no objeto carro

Object.assign(carro, adicionais);

console.log(carro)