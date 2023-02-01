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


//*fuction para el carrusel


function createLists(list) {
    const  divimg1 = document.getElementById("contenedor_img1");
    const  divimg2 = document.getElementById("contenedor_img2");
    const  divimg3 = document.getElementById("contenedor_img3");
    const  divimg4 = document.getElementById("contenedor_img4");
    const  divimg5 = document.getElementById("contenedor_img5");

    const listaNameHtml = ["HOME","UPCOMING EVENTS","PAST EVENTS", "CONTACT", "STATS"]

    let img1;
    let img2;
    let img3;
    let img4;
    let img5;

    for (let i = 0; i < list.length; i++) {
      const obj = list[i];
      if (!img1 && !img2 && !img3 && !img4 && !img5) {
        img1 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
                <a href="#"><h5>${listaNameHtml[0]}</h5></a>
        </div>`
      } else if (!img2 && !img3 && !img4 && !img5) {
        img2 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
                <a href="./assets/html/upcomigEvents.html"><h5>${listaNameHtml[1]}</h5></a>
        </div>`
      } else if (!img3 && !img4 && !img5) {
        img3 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
                <a href="./assets/html/pastEvents.html"><h5>${listaNameHtml[2]}</h5></a>
        </div>`
      } else if (!img4 && !img5) {
        img4 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
                <a href="./assets/html/contact.html"><h5>${listaNameHtml[3]}</h5></a>
        </div>`
      } else if (!img5) {
        img5 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
                <a href="./assets/html/stats.html"><h5>${listaNameHtml[4]}</h5></a>
        </div>`
      }
    }
    divimg1.innerHTML = img1;
    divimg2.innerHTML = img2;
    divimg3.innerHTML = img3;
    divimg4.innerHTML = img4;
    divimg5.innerHTML = img5;

    return [img1, img2, img3, img4, img5];
  }

createLists(lista.events)