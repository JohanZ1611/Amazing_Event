//*importo la data

let lista = data

//*fuction para el carrusel


function createLists(list) {
    const  divimg1 = document.getElementById("contenedor_img1");
    const  divimg2 = document.getElementById("contenedor_img2");
    const  divimg3 = document.getElementById("contenedor_img3");
    const  divimg4 = document.getElementById("contenedor_img4");
    const  divimg5 = document.getElementById("contenedor_img5");

    
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
        </div>`
      } else if (!img2 && !img3 && !img4 && !img5) {
        img2 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
        </div>`
      } else if (!img3 && !img4 && !img5) {
        img3 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
        </div>`
      } else if (!img4 && !img5) {
        img4 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
        </div>`
      } else if (!img5) {
        img5 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
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