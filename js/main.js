/*

//desarrollo

var text = "Holi a todos"
var text2 = text.toLowerCase().split(" ")
var arrayCapitalize= []

for (count = 0; count<text2.length; count++){

    var word = text2[count]
    var capitalize = `${word[0].toUpperCase()}${word.slice(1)}`
    arrayCapitalize[count] = capitalize
    
}
console.log(arrayCapitalize.join(" "))

//funcion 

function capitalizer (phrase) {
    var text2 = phrase.toLowerCase().split(" ")
    var arrayCapitalize= []

    for (count = 0; count<text2.length; count++){

       var word = text2[count]
       var capitalize = `${word[0].toUpperCase()}${word.slice(1)}`
        arrayCapitalize[count] = capitalize
       
    }
var arrayToString = arrayCapitalize.join(" ")
return arrayToString
}

*/
/*
var text = "Holi a todos palabraaa"
var array = text.split(" ")
console.log(array[1]);

    for(index = 0; index < array.length; index++){

        if (array[index].length < array[index].length+1){
            var largo = array[index]
        }

    }

console.log(largo)

//funcion

function palabraMasLarga (text){
var array = text.split(" ")

    for(index = 0; index < array.length; index++){

        if (array[index].length < array[index].length+1){
            var largo = array[index]
        }

    }
        return largo
}


var indice = []
var array = [[0,7,0],[7,7,7],[7 ,8,1]]
var numeros = array.join()
var elemento = 7
var result = 0

for (index=0;index<numeros.length;index++){     
    if(numeros[index].indexOf(elemento) != -1){
        indice.push(index)
    }    
}

console.log(`El elemento ${elemento} se repite ${indice.length} veces`)

//Palindromo

var palabra = ("Oso")
var palabra = palabra.toLowerCase().replace(/\s/g,"")
var wordReversed = palabra.split("").reverse().toString()

for (var i = 0; i < ((wordReversed.length)-1); i++) {
    wordReversed = wordReversed.replace(",","")
}
if (palabra === wordReversed){
    resultado="es un Palindromo"
}else {
    resultado=" no es un Palindromo"
}

console.log(resultado)*/


var sueldoMes = 450*30
var desc = .02
var empleados = [["David", 4],["Jose", 2]]
var sueldoTotal = 0
console.log(empleados)

for (index=0; index<empleados.length;index++){
    for(subindex=0;subindex<empleados[index]; subindex++){
        var sueldoTotal = empleados[index][subindex]*desc
    }
}
console.log("Sueldo final" + sueldoMes - sueldoTotal);
