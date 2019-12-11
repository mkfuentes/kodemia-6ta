var number = 11


if (number >= 0 && number <= 100 && number % 10 === 0 ) {

	console.log('Esta entre el rango de 10 y 100')

} else if (number % 10 === 0) {

	console.warn('Solo es multiplo de 10')

} else if (number >= 0 && number % 10 !== 0) {

	console.warn('Es positivo, no multiplo de 10')

} else {

	console.error('No esta en el rango ni es multiplo perro')

}


/*screen interpolation*/
/*
se utilizan comilla francesa invertida y las variables van dentro de ${}
console.log(`El resultado de 1+10 es: ${1+10}`)
*/


var palabra = "haa"

if (palabra.length % 2 === 0) {
    console.log("Cumple la condicion de numero par")
    if (palabra.length >= 0) {
        console.log("Es mayor o igual a 0 caracteres")
        if (palabra.length > 10) {
            console.log("Es mayor que 10 caracteres")    
            if (palabra.length < 15){
                console.log("Es menor que 15 caracteres")   
            } else {
                console.log("Mayor de 15 caracteres")
            }
        } else {
            console.log("Menor de 10 caracteres")
        }
    } else {
        console.log("Menor de 0")
        }
} else {
    console.log("Numero inpar")
}