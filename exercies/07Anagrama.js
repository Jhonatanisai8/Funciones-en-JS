/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function esAnagrama(palabra01, palabra02) {

    let p1 = new String(palabra01).toLowerCase()
    let p2 = new String(palabra02).toLowerCase()


    //validamos que las palabras sean de igual tamaño
    if (p1.length === p2.length) {
        return p1.split('').sort().join('') === p2.split('').sort().join('');
    }

    return false;

}
console.log(esAnagrama("amor", "romaa"))