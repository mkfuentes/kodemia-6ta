/*crear un boton que diga "agregar koder"*/
/*al darle clic debe tomar los datos de cada uno de los campos del formulario y crear un objeto llamado koderObject (koderName, koderEmail, koderAddress)*/
/*debe agregar el koderObject a kodersArray*/
/*debe crear una card por cada koder registrado*/

var kodersArray = [];
/* document.getElementById("koder-name")
    .addEventListener('keyup', (event) => {
        let inputValue = event.target.value;
        console.log(inputValue)
    })
document.getElementById("koder-email")
    .addEventListener('keyup', (event) => {
        let inputValue = event.target.value;
        console.log(inputValue)
    }) */
document.querySelectorAll(".form-control").forEach((element) => {
    element.addEventListener('keyup', (event) => {
        let inputValue = event.target.value;
        console.log(inputValue)
    }) 
})
const validateEmptyInput = () => {
    let koderMail = document.getElementById("koder-email").value;
    if (koderMail === "") {
        document.getElementById("koder-email").classList.add("alert-danger", "border-danger");
    } else {
        document.getElementById("koder-email").classList.remove("alert-danger", "border-danger");
    }
}
const clearError = () => {
    document.getElementById("koder-email").classList.remove("alert-danger", "border-danger");
    document.getElementById("koder-email").classList.add("alert-success", "border-success");
}
/*crear un boton que diga "agregar koder"*/
/*al darle clic debe tomar los datos de cada uno de los campos del formulario y crear un objeto llamado koderObject (koderName, koderEmail, koderAddress)*/
/*debe agregar el koderObject a kodersArray*/
/*debe crear una card por cada koder registrado*/
const buildCard = (koderName, koderAddress, koderEmail) => {
    return (
      `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${koderName}</h5>
          <p class="card-text mb-2 text-muted">${koderAddress}</p>
          <p class="card-text">${koderEmail}</p>
        </div>
      </div>
      
      `
    )
  }
const buildCards = (cards, parent) => {
    var accCards = cards.reduce((acc, {koderName, koderEmail, koderAddress})=> {
      console.log(acc)
      return acc + buildCard(koderName, koderEmail, koderAddress) 
    }, '')
    document.getElementById(parent).innerHTML = accCards
  }
  
const addKoder = () => {
    let koderName = document.getElementById("koder-name").value;
    let koderEmail = document.getElementById("koder-email").value;
    let koderAddress = document.getElementById("koder-address").value;
    let koderObject = {koderName, koderEmail, koderAddress}
    kodersArray.push(koderObject)
    buildCards(kodersArray,"koders-wrapper")
}


//se necesita un listener en el boton
//validar que la direccion sea email, no campos vacios y que el nombre no exista en el arreglo. 