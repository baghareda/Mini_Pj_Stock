const prompt = require ("prompt-sync")();
const trips = require ("./data.js");

const tickets = [];
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
            break;

        case 2 :
            i = 0;
            let name = prompt("ENTER THE PASSANGER NAME : ")
            let id = Number(prompt("THE TRIP ID : "))
            let found = false;

            while(i < trips.length)
            {
                if (trips[i].id == id)
                {
                    found = true
                    console.log("TRIP FOUND")
                    if (trips[i].availableSeats > 0)
                    {
                        console.log("THERE IS AVAILBLE SEAT")
                        let ticket = 
                        {
                            id : tickets.length + 1,
                            passengerName : name,
                            tripId : trips[i].id,
                            seatNumber : tickets.length + 1,
                            price : trips[i].price
                        };

                        tickets.push(ticket);
                        trips[i].availableSeats--;
                        console.log("YOUR BOUGHT A TICKET SUCCESFULLY")
                    }
                    else 
                        console.log("TRAIN FULL")
                }
                i++;
            }

            if (found === false)
            {
                console.log("TRIP DOES NOT EXICST")
            }
            break;

        case 3 :
            i = 0;
            while(i < tickets.length)
            {
                console.log(tickets[i])
                i++;
            }
            break;

        case 4 :
            i = 0;
            let j = 0;
            let ticket_found = false;

            let ticketId = Number(prompt("ENTER THE TICKET ID "))

            while(i < tickets.length)
            {
                if(tickets[i].id == ticketId)
                {
                    ticket_found = true
                    let fnd = tickets[i].tripId
                    while(j < trips.length)
                    {
                        if (trips[j].id == fnd)
                        {
                            trips[j].availableSeats++;
                            tickets.splice(i, 1);
                            console.log("TICKET CANCELED SUCSSEFULLY")
                        }
                        j++;
                    }
                }
                i++;
            }
            if (ticket_found === false)
            {
                console.log("TICKET NOT FOUND")
            }
            break;
        
        case 5 :

            i = 0;
            let tickfound = false;
            let nom = prompt("ENTER YOUR NAME : ")

            while(i < tickets.length)
            {
                if (tickets[i].passengerName == nom)
                {
                    tickfound = true;
                    console.log(tickets[i])
                }
                i++;
            }
            if (tickfound === false)
            {
                console.log("NO TICKET RELATED TO THIS NAME");
            }
            break;
        
        case 6 :
            
    }
}
