/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

let hack = "h@ck";

//Uniendo los dos arrays con "h@ck" entre ellos

//Transformamos el array de numeros como se solicita (usando MAP)
let numeros = numberArray.map(num => {
  switch (num) {
    case 1:
      return "one";
    case 3:
      return "three";
    case 5:
      return "five";
    default:
      return num;
  }
});
//ahora se tiene ["one", 2, "three", 4, "five"]

//Transformamos el array de palabras como se solicita (usando MAP)
let palabras = stringArray.map(str => {
  switch (str) {
    case "foo":
      return "f00";
    case "bar":
      return "Bar";
    case "baz":
      return "b@z";
    case "qux":
      return "quX";
    case "echo":
      return "3ch0";
    default:
      return str;
  }
});
//ahora se tiene ["f00", "Bar", "b@z", "quX", "3ch0"]

//Anexando "h@ck" e incluiyendo los arrays transformados
//usamos concat para unir todo 

result.push(hack);
result = result.concat(numeros);
result.push(hack);
result = result.concat(palabras);
result.push(hack);

console.log(result);

//export result
module.exports = result;