//*importo la data

let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing'


export async function getData() {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("The error is: " + error);
  }
}


//*agregar cards main

export function agregarCard(list,contaner,formulario) {
  let template = ""
  if(list.length === 0){
    
    noEncontradoHome(contaner,formulario)
  }else{
    for(let element of list){
      
      template += crearCards(element)
    }
    contaner.innerHTML = template
  }
}

//*card no encontrada home

export function noEncontradoHome(contaner,formulario){
  contaner.innerHTML = `<div class="style-mens">
  <h5>It has not been possible to find anything to "${formulario}".</h5>
  <h5>Try detailing your search.</h5>
  <img src="./assets/img/cinnamon-svgrepo-com.png" alt="perro">
  </div>`
  
}

//*card no encontrada

export function noEncontrado(contaner,formulario){
  contaner.innerHTML = `<div class="style-mens">
  <h5>It has not been possible to find anything to "${formulario}".</h5>
  <h5>Try detailing your search.</h5>
  <img src="../img/cinnamon-svgrepo-com.png" alt="perro">
  </div>`
  
}

//*agregar cards Upcoming

export function agregarCardUpcoming(list,contaner,formulario,fechaActual) {
    let template = ""
    if(list.length === 0){
      noEncontrado(contaner,formulario)
    }else{

      for(let element of list){
        let event = new Date(element.date)
        if (event >= fechaActual){
          template += cardUpAndPast(element)
    
        }
      }
      contaner.innerHTML = template
    }
}

//*agregar card Past
export function agregarCardPast(list,contaner,formulario,fechaActual) {
    let template = ""

    if(list.length === 0){
      noEncontrado(contaner,formulario)
    }else{
      for(let element of list){
        let event = new Date(element.date)
        if (event < fechaActual){
          template += cardUpAndPast(element)
    
        }
      }
      contaner.innerHTML = template
    }
}

//*crear cards home,up and past

export function crearCards(elemento){
  
    return `<div class="card" style="width: 18rem;">
            <img src="${elemento.image}"class="card-img-top tam_img_card" alt="img-cars">
            <div class="card-body" id="card-inf">
            <h5 class="card-title">${elemento.name}</h5>
            <p class="card-text">${elemento.description}</p>
            <div class="cont-btn-precio">
              <p class="card-text"><b>Price:</b> $ ${elemento.price}</p>
              <a href="./assets/html/details.html?id=${elemento._id}" class="btn btn-primary color_btn ms-auto" >Details</a>
            </div>
            </div>
        </div>`
        
        
    
}

export function cardUpAndPast(element){
    
    return `<div class="card" style="width: 18rem;">
                <img src="${element.image}"class="card-img-top tam_img_card" alt="img-cars">
                <div class="card-body" id="card-inf">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.description}</p>
                    <div class="cont-btn-precio">
                        <p class="card-text"><b>Price:</b>  $ ${element.price}</p>
                        <a href="./details.html?id=${element._id}" class="btn btn-primary color_btn ms-auto" >Details</a>
                    </div>
                </div>
            </div>`
            

}

//*agregar checks

export function agregarCheck(list,contaner) {
  let template = ""
  let elementCat = [...new Set(list.map(cat => cat.category))]
  
  elementCat.forEach(element => template += crearCheck(element))
  contaner.innerHTML += template
  
}

//*crear checks

export function crearCheck(event){
  return`
  <div class="form-check form-check-inline tam_check">
     <input class="form-check-input " type="checkbox" id="${event}" value="${event}">
      <label class="form-check-label" for="${event}">${event}</label>
  </div>`
  
}

//* filtrado searh and checks

export function searchList(searchValue,list){
  return list.filter((event) => event.name.toLowerCase().includes(searchValue))  
}

export function filtrarCardChecks(list){
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value)

  if(checked.length === 0){
    return list
  }

  return list.filter(event => checked.includes(event.category))
}

//*details
export function createDetails(event,container){
  container.innerHTML  =
      `<img src="${event.image}" class="img_details" alt="Books">
      <div class="inf_details" >
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text "><b>Description:</b> <br> ${event.description}</p>
      <ul>
          <li><b>Date:</b> ${event.date}</li>
          <li><b>Category:</b> ${event.category}</li>
          <li><b>Place:</b> ${event.place}</li>
          <li><b>Capacity:</b> ${event.capacity}</li>
          <li><b>Assistance:</b> ${event.assistance}</li>
          <li><b>Price:</b> ${event.price}</li>
      </ul>
      </div>`
 
}


//*fuction carrusel

export function createCarrusel(list) {
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

//*agregar cards Upcoming

export function agregarTabla(list,contaner,fechaActual) {
  
  let aux = [] 
  for(let element of list){
    let event = new Date(element.date)
    if (event >= fechaActual){
      aux.push(element)
    }
  }

  //*me un array de arrays de los precios por categoria

  const result = aux.reduce((acc, obj) => {//*acumulador(0),valor actual(cada obj del aux)
    const {category, price} = obj;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(price);
    return acc;
  }, {});//*El objeto vacío {} después de la función reduce se utiliza como el valor inicial para el acumulador (acc).

  const finalResult = Object.values(result);//*se convierte el objeto en un array de arrays utilizando Object.values, para que el resultado sea un array de arrays de precios agrupados por categoría.

  //*me un array de arrays de los estimados 

  const result2 = aux.reduce((acc, obj) => {//*acumulador(0),valor actual(cada obj del aux)
    
    const {category, estimate} = obj;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(estimate);
    return acc;
  }, {});

  const finalResult2 = Object.values(result2);

  //* operacion matematica 

  multiplyArrays(finalResult, finalResult2)
  //console.log(multiplyArrays(finalResult, finalResult2));

}

function multiplyArrays(arr1, arr2) {
  return arr1
    .map((array1, index) => {
      return array1.map((num, i) => num * arr2[index][i]);
    })
    .map(array => array.reduce((acc, cur) => acc + cur))
    
}

