/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let i = 1; //inicializando en 1

while(i <= 7){
    result.push(i);
    i += 2;  //aumentamos la i de dos en dos, empezando en 1, para poder generar el resultado buscado
}

console.log(result);

//export result
module.exports = result;