/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];

let i = 5; //sE INICIALIZA EN 5 para ir bajando

while(i >= 1){
    result.push(i);
    i--; //Disminuimos i en 1 cada ciclo
}

console.log(result);


//export result
module.exports = result;