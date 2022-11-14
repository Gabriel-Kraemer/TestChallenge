/* 
  Importante: 
  No modificar ni el nombre ni los argumentos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la función 
*/
function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  // Tu código aca:
  let miAmigo = amigos.filter(amigo => amigo["nombre"] === nombre);
  return miAmigo[0];
}

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo