import {createDetails,getData} from '../module/functions.js'

const data = getData();

const divDetail = document.getElementById("container-details")

const params = new URLSearchParams(location.search)

const id = params.get("id")


data.then(data => {
    const events = data.events.find(event => event._id == id)
    createDetails(events,divDetail)

}).catch ((error) =>
  console.log("The error is: " + error)
)


