/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let paraIterar = new Array(4).fill(0); //Creamos un array temporal con 4 elementos para poder iterar nuestro resultado (que es de 4 elementos tambien)

result = paraIterar.map((_, index) => {
  // Buscamos diseñar un return que genere la secuencia 1, 3, 5, 7 a partir de los índices del array (0, 1, 2, 3).
  return index * 2 + 1;
});

console.log(result);

//export result
module.exports = result;