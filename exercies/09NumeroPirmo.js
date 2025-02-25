/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esPrimo(numero) {
    let divisores = 0;
    for (let index = 2; index <= numero; index++) {
        if (numero % index === 0) {
            divisores++;
        }
    }
    return divisores == 1;
}

// llamamos a la función 
function mostrarPrimos() {
    for (let index = 1; index <= 100; index++) {
        if (esPrimo(index)) {
            console.log(`${index} es Primo = ${esPrimo(index)}`)
        }
    }
}

mostrarPrimos()
