import {createCarrusel,getData,agregarTablaUp,agregarTablaPast,agregarTablaEventsPast} from '../module/functions.js'

//*variables
const tbody1 = document.getElementById("tabla1")
const tbody2 = document.getElementById("tabla2")
const tbody3 = document.getElementById("tabla3")

//*import data

const data = getData();

data.then(data => {
  let fechaActual = new Date(data.currentDate)
    
  //*llamado a la funcion
  createCarrusel(data.events)
  agregarTablaEventsPast(data.events,tbody1,fechaActual)
  agregarTablaUp(data.events,tbody2,fechaActual)
  agregarTablaPast(data.events,tbody3,fechaActual)
  
}).catch ((error) =>
  console.log("The error is: " + error)
)



