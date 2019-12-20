//Sintaxis Reduce
// var parent = document.getElementById("ul")[0] **el cero es para indicar la posicion**
// var child = menu.reduce((acc, cValue) => `${acc}<li>${cValue}</li>`, '')
// parent.innerHTML = child

//funcion para construir menu dinamicamente

var menu = ["perro1", "perro2", "perro3", "perro4"]

const builMenu = (arr, parentSelector) => {
    let parent =document.getElementsByTagName(parentSelector)[0] //**el cero es para indicar la posicion**
    let child = arr.reduce((acc, cValue) => `${acc}<li>${cValue}</li>`, '')
    parent.innerHTML = child
}

builMenu(menu,"ul")

var liNodes = document.getElementsByTagName("li")

for (let index = 0; index<liNodes.length; index++){
    liNodes[index].addEventListener("click", function(){
    //aqui va la function
    quitarEstilo()
    this.classList.add("active")
    })
}

//arrowfunction para elminar el estilo
const quitarEstilo = function() {
    for (let i = 0; i < liNodes.length; i++) {
      liNodes[i].classList.remove("active")
      }
 }
 




