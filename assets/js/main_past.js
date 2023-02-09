import {agregarCardPast,agregarCheck,createCarrusel,searchList,filtrarCardChecks} from '../module/functions.js'


//*importo la data

let lista = data
const datos = data.events


//* variables
const form = document.getElementById("formulario")
const  divcontpast = document.getElementById("contenedor-cards-past") 
const checks = document.getElementById("checks")
let fechaActual = parseInt(lista.currentDate.slice(0,-6)) 

//*llamado a las funciones
createCarrusel(lista.events)
agregarCheck(datos,checks)
agregarCardPast(datos,divcontpast)


//*search

form.addEventListener("keyup",(event)=>{
  event.preventDefault()

  const searchValue = form[0].value.toLowerCase()
  const results = searchList(searchValue,datos)
  
  const filtrados = filtrarCardChecks(results)
  
  agregarCardPast(filtrados,divcontpast,searchValue)
  
})


//*checks

checks.addEventListener("change",(event)=>{
 
  const searchValue = form[0].value.toLowerCase()
  const results = searchList(searchValue,datos)
  
  const filtrados = filtrarCardChecks(results)
  
  agregarCardPast(filtrados,divcontpast,searchValue)

 
})