//10 dic
//devolver las palabras que empiecen con vocal a y A
var words = ["hola", "perro", "Alan", "aso", "Arbol"]
var vowels = "aA"

//row function
const filterVowerls = words.filter(word => vowels.includes(word[0]) )
console.log(filterVowerls)

//dado un array, devolver un string que contenga todas las iniciales 
//de las palabras dentro del array

//*****metodo reduce*****
//cValue es cada una de las palabras
//especificar inicializador para considerar el primer valor con ""

words.reduce(function(acc, cValue, index, arr){
    console.log(acc,cValue)
    return acc + cValue[0]
    //insertar inicializador abajo entre } y )
},'')   

