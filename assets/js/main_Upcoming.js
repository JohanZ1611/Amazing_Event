import {agregarCardUpcoming,agregarCheck,createCarrusel,searchList,filtrarCardChecks} from '../module/functions.js'

//*importo la data

const lista = data
const datos = data.events


//* variables

const form = document.getElementById("formulario")
const  divcontupcoming = document.getElementById("contenedor-cards-upcoming") 
const checks = document.getElementById("checks")


//*llamado a las funciones
createCarrusel(lista.events)
agregarCheck(datos,checks)
agregarCardUpcoming(datos,divcontupcoming)



//*search

form.addEventListener("keyup",(event)=>{
  event.preventDefault()

  const searchValue = form[0].value.toLowerCase()
  const results = searchList(searchValue,datos)
  
  const filtrados = filtrarCardChecks(results)
  
  agregarCardUpcoming(filtrados,divcontupcoming,searchValue)
  
})



//*checks

checks.addEventListener("change",(event)=>{
 
  const searchValue = form[0].value.toLowerCase()
  const results = searchList(searchValue,datos)
  
  const filtrados = filtrarCardChecks(results)
  
  agregarCardUpcoming(filtrados,divcontupcoming,searchValue)

 
})



