import {agregarCardUpcoming,agregarCheck,createCarrusel,searchList,filtrarCardChecks,getData} from '../module/functions.js'


//* variables

const form = document.getElementById("formulario")
const  divcontupcoming = document.getElementById("contenedor-cards-upcoming") 
const checks = document.getElementById("checks")


const data = getData();

data.then(data => {
  
  let fechaActual = new Date(data.currentDate)   
  
  //*llamado de las funciones
  createCarrusel(data.events)
  agregarCardUpcoming(data.events,divcontupcoming,"",fechaActual)
  agregarCheck(data.events,checks)

}).catch ((error) =>
  console.log("The error is: " + error)
)


//*search

form.addEventListener("keyup",(event)=>{
  event.preventDefault()

  const searchValue = form[0].value.toLowerCase()
  data.then(data => {
    let fechaActual = new Date(data.currentDate) 

    const results = searchList(searchValue,data.events)
    const filtrados = filtrarCardChecks(results)

    agregarCardUpcoming(filtrados,divcontupcoming,searchValue,fechaActual)
  }).catch ((error) => console.log("The error is: " + error))
  
})



//*checks

checks.addEventListener("change",(event)=>{
 
  const searchValue = form[0].value.toLowerCase()
  data.then(data => {
    let fechaActual = new Date(data.currentDate) 

    const results = searchList(searchValue,data.events)
    const filtrados = filtrarCardChecks(results)

    agregarCardUpcoming(filtrados,divcontupcoming,searchValue,fechaActual)
  }).catch ((error) => console.log("The error is: " + error))

 
})



