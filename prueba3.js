var usuarios = [
      {
        nombre: 'toni',
        online: true
      },
      {
        nombre: 'emi',
        online: true
      },
      {
        nombre: 'agus',
        online: false
      }
  ];



function estaOffline(usuarios, nombre) {
  // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
  // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
  // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
  // ej:
  
  // estaOffline(usuarios, 'agus') retorna true
  // estaOffline(usuarios, 'emi') retorna false

  // Tu código aca:
  for (i = 0 ; i < usuarios.length; i++){
    if (usuarios[i].nombre == nombre){
      return !(usuarios[i].online)
    }
  }
}

console.log(estaOffline(usuarios, 'agus'))