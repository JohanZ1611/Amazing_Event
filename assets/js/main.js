import {agregarCard,agregarCheck,searchList,filtrarCardChecks,createCarrusel,getData} from '../module/functions.js'


//* variables
const form = document.getElementById("formulario")
const  divcont = document.getElementById("contenedor-cards")
const checks = document.getElementById("checks")


//*importo la data


const data = getData();

data.then(data => {
  //*llamado de las funciones

  createCarrusel(data.events)
  agregarCard(data.events,divcont)
  agregarCheck(data.events,checks)

}).catch ((error) =>
  console.log("The error is: " + error)
)


//*search

form.addEventListener("keyup",(event)=>{
  event.preventDefault()

  const searchValue = form[0].value.toLowerCase()
  data.then(data => {
    const results = searchList(searchValue,data.events)
    const filtrados = filtrarCardChecks(results)

    agregarCard(filtrados,divcont,searchValue)
  }).catch ((error) => console.log("The error is: " + error))

})

//*checks

checks.addEventListener("change",(event)=>{
 
  const searchValue = form[0].value.toLowerCase()
  data.then(data => {
    const results = searchList(searchValue,data.events)
    const filtrados = filtrarCardChecks(results)

    agregarCard(filtrados,divcont,searchValue)
  }).catch ((error) => console.log("The error is: " + error))

})





