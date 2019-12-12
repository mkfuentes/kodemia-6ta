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
    'assigments': [
      {
        'name': 'Math',
        'grade': 7.3 
      },
      {
        'name': 'History',
        'grade': 4 
      }
    ]
  },
  {
    'firstName': 'Itiel',
    'lastName': 'Valera',
    'age': 31,
    'assigments': [
      {
        'name': 'Math',
        'grade': 9 
      },
      {
        'name': 'History',
        'grade': 6.5 
      }
    ]
  },
  {
    'firstName': 'Adan',
    'lastName': 'Mijangos',
    'age': 30,
    'assigments': [
      {
        'name': 'Math',
        'grade': 6
      },
      {
        'name': 'History',
        'grade': 10 
      }
    ]
  }
]
const getFinalAverage = group => {
  return group.reduce((acc, cValue) => {
    return acc + cValue.assigments.reduce((acc2, cValue2) => {
      return acc2 + cValue2.grade
    }, 0) / cValue.assigments.length
  }, 0) / group.length
}

console,console.log(getFinalAverage);
