/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];

for(let i = 5; i >= 1; i--){ //la variable i se inicializa en 5, para empezar a disminuirla en 1 en cada ciclo (i--)
    result.push(i);
}

console.log(result);

//export result
module.exports = result;