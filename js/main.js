//dom class


var abdce = [
  "a", "b", "c", "d", "e"
]
//dom selectors
var liNodes = document.getElementsByTagName("li")

for (i=0;i<abdce.length; i++){
  liNodes[i].innerText = abdce[i]
}