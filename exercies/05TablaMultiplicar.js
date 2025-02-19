/* Crea una función que reciba un número y 
devuelva su tabla de multiplicar del 1 al 10. */

function tablaMultiplicarNumero(numero) {
    for (let index = 0; index <= 10; index++) {
        console.log(`${numero} X ${index} = ${numero * index}`)
    }
}


tablaMultiplicarNumero(34)