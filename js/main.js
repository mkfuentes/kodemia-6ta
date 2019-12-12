//var numbers = [1, 2, 3, 4, 5]

//for (index in numbers) {
    //console.log[numbers[index]
//}

//los array son objetos del tipo array

//abstraer el objeto alumno y dado un array de alumnos retornar promedio general

var alumnos = [
    {  
      'firstName': 'Kevin',
      'lastName': 'Perez',
      'age': 23,
      'finalAverage': 8.9
    },
    {
      'firstName': 'Itiel',
      'lastName': 'Valera',
      'age': 31,
      'finalAverage': 6.4
    },
    {
      'firstName': 'Adan',
      'lastName': 'Mijangos',
      'age': 30,
      'finalAverage': 9.1
    }
  ]
  const getFinalAverage = group => {
    return group.reduce((acc, cValue) => {
      return acc + cValue.finalAverage
    }, 0) / group.length
  }
