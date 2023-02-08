
const divDetail = document.getElementById("container-details")

const params = new URLSearchParams(location.search)

const id = params.get("id")

const events = data.events.find(event => event._id === id)

createDetails(events)

function createDetails(event){
  
    divDetail.innerHTML  =
        `<img src="${events.image}" class="img_details" alt="Books">
        <div class="inf_details" >
        <h5 class="card-title">Card title</h5>
        <p class="card-text "><b>Description:</b> <br> Bring your unused school book and bring the one you need.</p>
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