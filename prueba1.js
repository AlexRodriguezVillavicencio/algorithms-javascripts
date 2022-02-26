function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares.
  // ej:
  // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15

  // Tu código aca:
    let suma = 0
    for (i = 0; i < array.length; i++){
        if (array[i]%2 != 0){
            suma += array[i];
        }
    }
    console.log(suma);
  
}

sumaTodosImpares([1, 5, 2, 9, 6, 4])
