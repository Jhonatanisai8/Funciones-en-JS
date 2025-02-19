// crea un función en donde se pase una edad como argumento y muestra si es mayor o menor de edad.

function mayorEdad(edad) {
    if (edad >= 18) {
        return 'Eres mayor de edad.'
    } else {
        return 'Aun eres menor de edad'
    }
}

console.log(mayorEdad(56))