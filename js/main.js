/* const treeNodes = [
  {
    'nodeName': 'p',
    'content': 'Hola'
  },
  {
    'nodeName': 'p',
    'content': 'Mundo'
  },
  {
    'nodeName': 'h1',
    'content': 'holi'
  }
]
const buildTree = (nodes, parent) => {
  const parentNode = document.getElementById(parent)
  nodes.forEach(
    ({ nodeName, content }) => {
      const node = document.createElement(nodeName)
      node.innerText = content
      parentNode.appendChild(node)
    }
  )
}
const buildTreeInnerHTML = (nodes, parent) => {
  const parentNode = document.getElementById(parent)
  let accNodes = ''
  nodes.forEach(({ nodeName, content }) => {
    const node = `<${nodeName}> ${content} </${nodeName}>` 
    accNodes += node    
  })
  parentNode.innerHTML = accNodes
}
const buildTreeInnerHTMLWithReduce = (nodes, parent) => {
  const parentNode = document.getElementById(parent)
  const accNodes = nodes.reduce((acc, { nodeName, content }) => {
    return `${acc} <${nodeName}> ${content} </${nodeName}>`
  }, '')
  parentNode.innerHTML = accNodes
}
*/


// Construir la zona de post de un blog
const treeNodes = [
  {
    'title': 'Koders aprenden',
    'subtitle': 'A golpes',
    'content': 'fdjskfkjdsafkjdlsafklsafjksdajkfdasjkfjabfdsfd',
  },
  {
    'title': 'Koders 2',
    'subtitle': 'A golpes',
    'content': 'fdjskfkjdsafkjdlsafklsafjksdajkfdasjkfjabfdsfd',
  },
  {
    'title': 'Koders 3',
    'subtitle': 'A golpes',
    'content': 'fdjskfkjdsafkjdlsafklsafjksdajkfdasjkfjabfdsfd',
  },
  {
    'title': 'Koders 4',
    'subtitle': 'A golpes',
    'content': 'fdjskfkjdsafkjdlsafklsafjksdajkfdasjkfjabfdsfd',
  },
]
const buildCard = (title, subtitle, content) => {
  return (
    `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6>
        <p class="card-text">${content}</p>
      </div>
    </div>
    
    `
  )
}
const buildCards = (cards, parent) => {
  var accCards = cards.reduce((acc, {title, subtitle, content})=> {
    console.log(acc)
    return acc + buildCard(title, subtitle, content) 
  }, '')
  document.getElementById(parent).innerHTML = accCards
}
buildCards(treeNodes, 'container')

//funcion para construir el html
var pares = []

var numbers = [2,3,4,5,6,1]
let evens = numbers.map(item =>{
  if(item%2===0){
    pares.push(item)
  }
}
  )