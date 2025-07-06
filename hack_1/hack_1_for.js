/**
 * mediante el loop for agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */

let result = [];


for (let i = 0; i <= 5; i++) { // El for inializa i en 0, y se ejecuta mientras sea menor o igual a 5
  result.push(i); //se agrega el valor de i en cacda ciclo
}

// Corroborando el output
console.log(result);

//export result
module.exports = result;