//dom class


var abdce = [
  "a", "b", "c", "d", "e"
]
//dom selectors, objeto que recibe un elemento
var liNodes = document.getElementsByTagName("li")

for (i=0;i<abdce.length; i++){
  liNodes[i].innerText = abdce[i]
}