/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let i = 7; //Inicializamos en 7 para ir en disminucion

while(i >= 1){
    result.push(i);
    i -= 2; //decrementamos de dos en dos
}

console.log(result);

//export result
module.exports = result;