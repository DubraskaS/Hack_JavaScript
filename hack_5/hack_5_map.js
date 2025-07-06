/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let paraIterar = new Array(4).fill(0); // Creamos array de 4 items
let temporal = paraIterar.map((_, index) => index * 2 + 1); // creamos unarray temporal que será [1,3,5,7]

result = temporal.reverse(); // invertimos el array temporal y lo guardamos en result

console.log(result);

//export result
module.exports = result;