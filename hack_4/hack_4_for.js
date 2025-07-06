/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

for(i = 1; i <= 7; i += 2){ //aumentamos la i de dos en dos, empezando en 1, para poder generar el resultado buscado
    result.push(i);
}

console.log(result);

//export result
module.exports = result;