//*importo la data

let lista = data


//*upcoming

function cardUpcoming(lista){

    
    let fechaActual = parseInt(lista.currentDate.slice(0,-6)) 
    const  divcontupcoming = document.getElementById("contenedor-cards-upcoming") 
    let template = ''

    for(let element of lista.events){
        let event = parseInt(element.date.slice(0,-6))
        //console.log(event)
        if (event === fechaActual){
            template +=
        `<div class="card" style="width: 18rem;">
                <img src="${element.image}"class="card-img-top" alt="img-cars">
                <div class="card-body" id="card-inf">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.description}</p>
                    <div class="cont-btn-precio">
                        <p class="card-text">Price: $ ${element.price}</p>
                        <a href="./assets/html/details.html" class="btn btn-primary color_btn ms-auto" >Details</a>
                    </div>
                </div>
            </div>`
        
        }

    }
    divcontupcoming.innerHTML = template
    console.log(divcontupcoming)

}

cardUpcoming(lista)