let elemento =document.querySelector('#titulo-principal');


// considera as bordas
console.log('largura: ' + elemento.offsetWidth +  'px');
console.log('Altura: ' + elemento.offsetHeight +  'px');


// não considera as bordas
console.log('largura: ' + elemento.clientWidth +  'px');
console.log('Altura: ' + elemento.clientHeight +  'px');