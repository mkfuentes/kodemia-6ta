//sumar elementos dentro de un array
/*
var numbers = [[1, 4, 9],[2,3,4],[5,6,7,6]]
numbers.map(function(arr){
    let total = 0
    console.log(arr)
    arr.forEach(function(number){
        total+=number
        console.log(number)
    })
    return total
})
*/

//Dado un array devolver los elementos que empiecen con a - A


   

//Verificar que todos los elementos en un array son pares positivos
/*
var pares = [1,2,3,4,5,6,7]
var posPar = pares.filter(function(elemento1){
   
})
*/
console.log(elemento1)

//retornar el total de cada uno de los elementos del array al cuadrado

var numbers = [2,4,7]
var cuadrado = numbers.map(function(elemento){
    return elemento ** 2
})

console.log(cuadrado)

//sumar con reduce
var reductor = [[1,2,3,0],[10,0,3,4],[1,2,0],[4,3,2,1]]

reductor.reduce(function(accumulator, currenValue, indice, vector){
    return accumulator + currenValue
})

//Factorial


function factorial (numero) {
	var total = 1; 
	for (index=1; index<=n; index++) {
		total = total * index; 
	}
	return total; 
}


    