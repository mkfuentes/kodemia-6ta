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

var text = "Holi a todos palabraaa"
var array = text.split(" ")
console.log(array[1]);

    for(index = 0; index < array.length; index++){

        if (array[index].length < array[index].length+1){
            var largo = array[index]
        }

    }

console.log(largo)