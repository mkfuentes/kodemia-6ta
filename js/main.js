//creacion de rfc
var curp = []
function Rfc (nombre, apellidoPaterno, apellidoMaterno, dia, mes, anio){
  this.nombre = nombre
  this.apellidoPaterno = apellidoPaterno
  this.apellidoMaterno = apellidoMaterno
  this.dia = dia
  this.mes = mes
  this.anio = anio
}

var persona1 = new Rfc ("Miguel", "Fuentes", "Morales", 18,10,1992)
var paterno = persona1.apellidoPaterno
paterno = paterno.toUpperCase()
var materno = persona1.apellidoMaterno
var nom = persona1.nombre
var day = persona1.dia
var month = persona1.mes
var year = persona1.anio
year = year.toString()

curp.push(paterno.substr(0,2)+materno.substr(0,1)+nom.substr(0,1)+year.substr(2,2)+month+day)

//console.log(curp)


//clase 9

//var dog = {
  //name: "Solovino"
  //breed: "Electrico"
  //bark: function(){
    //return "guauu"
  //}
//}

//console.log(dog.bark())

//Ejercicio1
//recibir un array y pasarlo a objeto
var arrayHumano = [
  ["jorge","perez", 23],
  ["juan", "torres", 25],
  ["daniel", "guzman", 30]
]

function Persona (firstName, lastName, age){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const agregarPersona = matrix => {
  return matrix.map(npersona =>  new Persona(npersona[0],npersona[1],npersona[2]))
}

//funcion que tome dos numeros como argumentos y devuelva una matriz de numeros.

var multiplos = []
function arrayOfMult (num, length){
  for (index = 1; index<=length; index++)  
  multiplos.push(num*index)
}


//Convertir un objeto en una matriz donde cada elemento representa palabra valor
//toArray ({a:1, b:2}) >>> [["a",1],["b",2]]
/*

var objeto = {
  a:1,
  b:2,
  c:3
}
​
var objArr = []
function toArray (obj){
objArr = Object.entries(objeto)
console.log(objArr)
}
*/

// ejercicio 3 ** Eliminar duplicados de array

var list = [1,2,3,4,5,6,3,2,1]
var unique = []

function removeDups (array){
  for(index=0;index<array.length;index++){
    if (array.indexOf(array[index]) === -1){
        unique.push(array)
    }
    }
  }
  