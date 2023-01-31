//*importo la data

let lista = data

//*crear cards

function crearCards( lista ){

    const  divcont = document.getElementById("contenedor-cards") 
    let template = ''

    for (let elemento of lista.events) {
        template +=
        `<div class="card" style="width: 18rem;">
            <img src="${elemento.image}"class="card-img-top" alt="img-cars">
            <div class="card-body" id="card-inf">
            <h5 class="card-title">${elemento.name}</h5>
            <p class="card-text">${elemento.description}</p>
            <div class="cont-btn-precio">
              <p class="card-text">Price: $ ${elemento.price}</p>
              <a href="./assets/html/details.html" class="btn btn-primary color_btn ms-auto" >Details</a>
            </div>
            </div>
        </div>`
        
    }

    divcont.innerHTML = template
    
}

crearCards( lista )


