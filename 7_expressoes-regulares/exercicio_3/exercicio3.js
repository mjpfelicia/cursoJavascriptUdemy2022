// regex que acete s segunte expressão "marca: nome da marca"


const validaMarca = /\w+: (Nike|adidas|Asic)/;



console.log(validaMarca.test("marca: adidas"));
console.log(validaMarca.test("marca: Nike"));
console.log(validaMarca.test("marca: puma"));
console.log(validaMarca.test("marca: "));
console.log(validaMarca.test("puma"));