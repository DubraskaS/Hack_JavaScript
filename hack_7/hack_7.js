/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

//USANDO MAP

result = arr.map(item => {
  // "item" representa cada string contenido en arr

  //Tomando el primer caracter del string y convirtiendolo a mayúscula
  const first = item[0].toUpperCase();

  //Tomando el resto del string (desde el segundo caracter en adelante)
  const resto = item.slice(1);

  //Uniendo el primer caracter capitalizado con el resto del string
  return `${first}${resto}`;
});

console.log(result);


//export result
module.exports = result;