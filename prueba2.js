function stringMasLarga(str) {
    // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
    // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
    // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
    // Tip: podes usar el metodo de String 'split'
  
    // Tu código aca:

    cadena =  str.split(" ");
    maximo = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].length > maximo) {
            maximo = cadena[i].length;

            if(maximo == cadena[i].length){
                maximoCadena = cadena[i]
            }
        }
    }
  return maximoCadena;
}
  

console.log(stringMasLarga('Ayer fui a pasear a una plaza'));
