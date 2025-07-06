/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

for(let i = 7; i >= 1; i -= 2){ //Decremento de dos en dos e inicio en 7
    result.push(i);
}

console.log(result);

//export result
module.exports = result;