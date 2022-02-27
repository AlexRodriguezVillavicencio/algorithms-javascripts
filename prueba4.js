persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
persona2 = ['comer', 'dormir', 'futbol']

function actividadesEnComun(persona1, persona2) {
    // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
    // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
    // ej: 
    // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
    // Tip: podes usar ciclos for anidados.
    // Tu código aca:
    arreglo = []
    for (i = 0; i < persona1.length; i++){
        for (j = 0; j < persona2.length; j++){
            if (persona2[j] === persona1[i] ){
                  arreglo.push(persona1[i])
            }
        }
    }
    return arreglo
}
console.log(actividadesEnComun(persona1, persona2))