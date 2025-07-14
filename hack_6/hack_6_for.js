/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
let str = "fooziman"; //el string de entrada, que necesitamos dividir para el output
let result = [];

// Usamos un bucle 'for' para iterar sobre "fooziman"
// 'i' va desde 0 hasta el último índice de la palabra (str.length - 1)
for (let i = 0; i < str.length; i++) {
  // En cada iteración, 'str[i]' accede a la letra en la posición actual
  result.push(str[i]); // Añadimos esa letra al array 'result'
}

console.log(result)

//export result
module.exports = result;