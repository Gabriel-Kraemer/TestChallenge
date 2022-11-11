/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let cadena = num.tostring();
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== cadena[cadena.length - (i+1)]) {
      return false;
    }
  }
  return true;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico