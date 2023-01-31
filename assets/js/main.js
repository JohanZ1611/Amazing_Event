//*importo la data

let lista = data

//*crear cards

function crearCards( lista ){

    const  divcont = document.getElementById("contenedor-cards") 
    let template = ''

    for (let elemento of lista.events) {
        template +=
        `<div class="card" style="width: 18rem;">
            <img src="${elemento.image}">
            <div class="card-body">
            <h5 class="card-title">${elemento.name}</h5>
            <p class="card-text">${elemento.description}</p>
            <a href="./assets/html/details.html" class="btn btn-primary color_btn" >Details</a>
            </div>
        </div>`
        
    }
    divcont.innerHTML = template
    
}

crearCards( lista )



//filtrar:

//*upcoming

// function cardUpcoming(lista){

    
//     let añoActual = lista.currentDate.slice(0,-6)
//     //console.log(añoActual)

//     for (let elemento of lista.events) {
//         let año = elemento.date.slice(0,-6);
//         //console.log(año)
        
//         let up = []

//         if (año === añoActual) {
            
//             up.push(año)
            
//         }

//         //console.table(up)

//     }


// }

// cardUpcoming(lista)

//insertar