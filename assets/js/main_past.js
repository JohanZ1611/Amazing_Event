//*importo la data

let lista = data
const datos = data.events


//* variables
const form = document.getElementById("formulario")
const  divcontpast = document.getElementById("contenedor-cards-past") 
const checks = document.getElementById("checks")
let fechaActual = parseInt(lista.currentDate.slice(0,-6)) 

//*llamado a las funciones
agregarCheck(datos)
cardPast(datos)


//*crear card

function cardPast(lista){
  
    let template = ''

    for(let element of lista){
        let event = parseInt(element.date.slice(0,-6))
        //console.log(event)
        if (event < fechaActual){
            template +=
        `<div class="card" style="width: 18rem;">
                <img src="${element.image}"class="card-img-top tam_img_card" alt="img-cars">
                <div class="card-body" id="card-inf">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.description}</p>
                    <div class="cont-btn-precio">
                        <p class="card-text">Price: $ ${element.price}</p>
                        <a href="./details.html" class="btn btn-primary color_btn ms-auto" >Details</a>
                    </div>
                </div>
            </div>`
            
        }

    }
    divcontpast.innerHTML = template
    

}

//*crear checks

function agregarCheck(list) {
  let template = ""
  let elementCat = [...new Set(list.map(cat => cat.category))]
  
  for( let element of elementCat ){
        
    template += crearCheck(element)
  } 
  checks.innerHTML += template
  
}


function crearCheck(event){
  return`
  <div class="form-check form-check-inline tam_check">
     <input class="form-check-input " type="checkbox" id="inlineCheckbox2" value="${event}">
      <label class="form-check-label" for="inlineCheckbox2">${event}</label>
  </div>`
  
}

//*search

form.addEventListener("keyup",(event)=>{
  event.preventDefault()

  const searchValue = form[0].value.toLowerCase()
  const results = searchList(searchValue,datos)
  
  const filtrados = filtrarCardChecks(results)
  
  cardPast(filtrados)
  
})

function searchList(searchValue,list){
  return list.filter((event) => event.name.toLowerCase().includes(searchValue))  
}

//*checks

checks.addEventListener("change",(event)=>{
 
  const searchValue = form[0].value.toLowerCase()
  const results = searchList(searchValue,datos)
  
  const filtrados = filtrarCardChecks(results)
  
  cardPast(filtrados)

 
})

function filtrarCardChecks(list){
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value)

  if(checked.length === 0){
    return list
  }

  return list.filter(card => checked.includes(card.category))
}




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
                <a href="../../index.html"><h5>${listaNameHtml[0]}</h5></a>
        </div>`
      } else if (!img2 && !img3 && !img4 && !img5) {
        img2 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
                <a href="./upcomigEvents.html"><h5>${listaNameHtml[1]}</h5></a>
        </div>`
      } else if (!img3 && !img4 && !img5) {
        img3 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
                <a href="#"><h5>${listaNameHtml[2]}</h5></a>
        </div>`
      } else if (!img4 && !img5) {
        img4 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
                <a href="./contact.html"><h5>${listaNameHtml[3]}</h5></a>
        </div>`
      } else if (!img5) {
        img5 = 
        `<img src="${obj.image}" class="d-block w-100 img_carrucel" alt="musica">
            <div class="carousel-caption  d-md-block tam_text_carrusel">
                <a href="./stats.html"><h5>${listaNameHtml[4]}</h5></a>
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