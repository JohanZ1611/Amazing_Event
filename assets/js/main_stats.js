import {createCarrusel,getData,agregarTabla} from '../module/functions.js'

//*import data

const data = getData();

data.then(data => {
  let fechaActual = new Date(data.currentDate)
    
  //*llamado a la funcion
  createCarrusel(data.events)
  agregarTabla(data.events,"",fechaActual)
}).catch ((error) =>
  console.log("The error is: " + error)
)

//*---------

