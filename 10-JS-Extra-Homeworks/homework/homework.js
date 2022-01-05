// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for (clave in objeto){
    var arrayPequeño = [clave, objeto[clave]];
    array.push(arrayPequeño);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  //Primero creamos el objeto que queremos devolver, vacio y variable porque le vamos a ir cambiando su valor.
  var obj = {}

  //Transformamos el string que nos dan en un array
  var arrayString = string.split("");
  
  //Recorro el arrayString, si hay una clave cuyo nombre coincide con el arrayString[i] le sumo 1 y sino lo nombro como clave
  for (let i = 0; i < arrayString.length; i++){
    if (obj[arrayString[i]]===undefined){
      obj[arrayString[i]] = 1;
    } else (obj[arrayString[i]] = obj[arrayString[i]] + 1);
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var arrayString = s.split("")
  var contador = 0;
  for (let i = 0; i < arrayString.length; i++){
    if (arrayString[i] === arrayString[i].toUpperCase()){
      arrayString.splice(contador, 0, arrayString[i])
      arrayString.splice(i+1,1)
      contador = contador + 1;
    }
  }
  return arrayString.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array1 = str.split(" "); // => array1 = ["The", "Henry", "Challenge", "is", "close!"]
  var array2 = [];
  for (let i = 0; i < array1.length; i++){
    var array3 = array1[i].split(""); // => array3 = ["T", "h", "e"] (siendo array1[1])
    array2.push(array3.reverse().join("")); // => ["e", "h", "T"] =>  ["ehT"]
  }
  return array2.join(" "); // => ["ehT", "yrneH", "egnellahC", "si", "!esolc"] => "ehT yrneH egnellahC si !esolc"
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //var numString = numero.toString() //1234 => "1234"
  //var numArray = numString.split(" ") // "1234" => ["1", "2", "3", "4"]
  
  var numReves = Number(numero.toString().split("").reverse().join(""))//["1", "2", "3", "4"] => ["4", "3", "2", "1"] => 4321
  //Hacemos un if, si numero es igual a su número al revés entonces es capicua.
  if(numReves === numero){
    return "Es capicua";
  } else return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let arrayCadena = cadena.split("");
  for (let i = 0; i < arrayCadena.length; i++){
    if (arrayCadena[i] === "a"|| arrayCadena[i] === "b" || arrayCadena[i] === "c"){
      arrayCadena.splice(i, 1);
      i = i-1;
    }
  }
  return arrayCadena.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b){
    return a.length - b.length;
  })
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var union = [];
  for (let i = 0; i < arreglo1.length; i++){
    for (let j = 0; j < arreglo2.length; j++){
      if (arreglo1[i] === arreglo2[j]){
        union.push(arreglo1[i]);
      }
    }
  }
  return union;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

