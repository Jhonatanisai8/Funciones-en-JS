/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */


function fibonacci(numero) {
    if (numero <= 0) {
        return 0
    } else if (numero == 1) {
        return 1
    } else {
        let valor = fibonacci(numero - 1) + fibonacci(numero - 2)
        return valor
    }
}

for (let index = 1; index <= 9; index++) {
    console.log(fibonacci(index))
}