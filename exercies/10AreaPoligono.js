/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calcularAreaPoligono(tipo, base, altura) {
    let area = 0;
    switch (tipo) {
        case 1:
            area = (base * altura) / 2;
            break;
        case 2:
            area = base * altura;
            break;
        case 3:
            area = (base * altura);
            break;
        default:
            area = 0;
            break;
    }
    return area;
}

console.log(calcularAreaPoligono(2,30,30));