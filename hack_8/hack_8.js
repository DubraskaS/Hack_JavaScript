/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

//USANDO MAP

//Anexamos a result los elementos [bar,baz,qux] del array de entrada (usando slice para cortar solo esa parte del array)
let tempResult = arr.slice(1, 4); // tempResult ahora es ["bar", "baz", "qux"]

//Los 2 primeros elementos, reescribir "a" por "@" (iteramos usando MAP)
result = tempResult.map((item, index) => {
  if (index === 0 || index === 1) {
    //Si es el primer o segundo elemento, reemplazamos 'a' por '@'
    return item.replace('a', '@');
  } else {
    return item;
  }
});
//Modificamos el último ítem "quz" a mayúscula
result[2] = result[2].toUpperCase(); 

console.log(result);

//export result
module.exports = result;