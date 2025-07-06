/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

for(let i = 1; i <= 5; i++){  //inicializamos i en 1 en vez de en 0
    result.push(i)
}

console.log(result) //para corroborar el resultado antes del test

//export result
module.exports = result;