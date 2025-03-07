/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertirCadena(cadena) {
    let cadenaF = new String(cadena)
    let texto = ""
    for (let i = cadenaF.length ; i > 0 ; i--) {
        texto += cadenaF[i-1]
    }
    return texto
}

console.log(invertirCadena("hola mundo"))