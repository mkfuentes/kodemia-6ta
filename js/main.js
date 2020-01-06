//HTTP request methods GET POST PUT HEAD DELETE PATCH OPTIONS
//hacer una peticion xhttprequest
//onreadystatechange avisar el estatus del servidor
//this scope del objeto mismo

//xhttp.open('POST', 'https://ajaxkode.firebaseio.com/koders.json')
//xhttp.send(mkFuentes)

//JSON.stringify convierte los datos y se agrega el objeto

//obtener la base desde la raiz
//xhttp.open('GET','https://ajaxkode.firebaseio.com/.json')
//enviar la peticion al servidor
//xhttp.send()

var mkFuentes = JSON.stringify({   
    'firstName': 'Miguel',
    'lastName': 'Fuentes',
    'age': 27,
    'pitch' : true

})

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200 ) {
    responseHandler(this.response)
  }
}

xhttp.open('GET', 'https://ajaxkode.firebaseio.com/koders.json')
xhttp.send()

const responseHandler = response => {
    var responseObj = JSON.parse(response)
    var responseEntries = Object.entries(responseObj)
        console.log(responseEntries)
}