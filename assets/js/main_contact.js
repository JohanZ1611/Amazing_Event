import {createCarrusel,getData} from '../module/functions.js'

//*import data

const data = getData();

data.then(data => {
    
  //*llamado a la funcion
  createCarrusel(data.events)
  
}).catch ((error) =>
  console.log("The error is: " + error)
)


