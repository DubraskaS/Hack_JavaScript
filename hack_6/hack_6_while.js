/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];
let i = 0;

while (i < str.length) { //iteramos sobre la palabra con el while, hasta el último índice de la palabra (str.length - 1)
  // En cada iteración, 'str[i]' accede a la letra en la posición actual
  result.push(str[i]); // Añadimos esa letra al array 'result'
  i++;
}

console.log(result)

//export result
module.exports = result;