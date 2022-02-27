function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:
    new_array = []
    for (i = 0; i < arreglo.length; i++){
        if ( arreglo[i] === num ){           
            continue          
        }
        new_array.push(arreglo[i])
    }
    return new_array    
}
console.log(buscaDestruye([1, 2, 3, 4, 1], 1));