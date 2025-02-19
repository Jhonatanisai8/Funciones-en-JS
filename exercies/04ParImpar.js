// Escribe un programa que determine 
// si un número es par o impar.

function esPar(numero) {
    return numero % 2 == 0;
}

// variable
const numero = 45

console.log(`¿El número ${numero} 
    es par?: ${esPar(numero)}`)
