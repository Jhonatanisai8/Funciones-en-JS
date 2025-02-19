/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


//de acuero al número se mostrar el mensaje
function mensaje(numero) {
    if ((numero % 3 == 0) && (numero % 5 == 0)) {
        return "fizzbuzz";
    } else if (numero % 3 == 0) {
        return "fizz";
    } else if (numero % 5 == 0) {
        return "buzz";
    } else {
        return numero;
    }
}

//recorremos del 1 al 100 y llamamos a la función que muestra el mensaje
function fizzBuzz() {
    for (let index = 1; index <= 100; index++) {
        console.log(`${mensaje(index)}`)
    }
}

fizzBuzz();