import {agregarCard,agregarCheck,searchList,filtrarCardChecks,createCarrusel} from '../module/functions.js'

//*importo la data

const lista = data
const datos = data.events


//* variables
const form = document.getElementById("formulario")
const  divcont = document.getElementById("contenedor-cards")
const checks = document.getElementById("checks")



//*llamado de las funciones
createCarrusel(lista.events)
agregarCard(datos,divcont)
agregarCheck(datos,checks)


//*search

form.addEventListener("keyup",(event)=>{
  event.preventDefault()

  const searchValue = form[0].value.toLowerCase()
  const results = searchList(searchValue,datos)
  
  const filtrados = filtrarCardChecks(results)
  
  agregarCard(filtrados,divcont)
  
})

//*checks

checks.addEventListener("change",(event)=>{
 
  const searchValue = form[0].value.toLowerCase()
  const results = searchList(searchValue,datos)
  
  const filtrados = filtrarCardChecks(results)
  
  agregarCard(filtrados,divcont)

 
})





