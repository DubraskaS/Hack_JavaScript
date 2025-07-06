/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];

// Variable de control
let i = 0;

// El while se ejecuta mientras i sea menor o igual a 5
while (i <= 5) {
  result.push(i); //se agrega el valor de i en cacda ciclo
  // Incrementamos el valor de 'i' 
  i++;
}

// Corroborando el output
console.log(result);

//export result
module.exports = result;