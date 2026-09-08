const prompt = require ("prompt-sync")();
const trips = require ("./data.js");

let tickets = [];
let i = 0;
let choice = 1

while(choice > 0)
{
    choice = Number(prompt("CHOOSE YOUR NEED NUMBER : "))
    switch(choice) 
    {
        case 1 :
            i = 0;
            while(i < trips.length)
            {
                console.log(`THE TRIP ID : ${trips[i].id}
                    DEPART : ${trips[i].departure}  ==>  DESTINATION : ${trips[i].destination}
                    DEPARTURE TIME : ${trips[i].departureTime}
                    ARRIVAL TIME : ${trips[i].arrivalTime}
                    PRICE : ${trips[i].price}
                    PLACES DISPONIBLE : ${trips[i].availableSeats}`)
                i++;
            }
            break
        case 2 :
            i = 0;
            let name = prompt("ENTER THE PASSANGER NAME : ")
            let id = Number(prompt("ENTER THE PASSANGER ID : "))
            let found = false;
            while(i < trips.length)
            {
                if (trips[i].id == id)
                {
                    console.log("TRIP FOUND")
                    if (trips[i].availableSeats > 0)
                    {
                        found = true;
                        console.log("THERE IS AVAILBLE SEAT")
                    }
                    else 
                        found == false
                        console.log("TRAIN FULL")
                }
                i++;
            }
            break;
    }
}
