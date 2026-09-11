const prompt = require ("prompt-sync")();
const trips = require ("./data.js");

const tickets = [
    { id: 1, passengerName: "Ahmed", tripId: 1, seatNumber: 1, price: 25 },
    { id: 2, passengerName: "Fatima", tripId: 1, seatNumber: 2, price: 25 },
    { id: 3, passengerName: "Youssef", tripId: 2, seatNumber: 1, price: 30 },
    { id: 4, passengerName: "Ayoub", tripId: 3, seatNumber: 1, price: 90 },
    { id: 5, passengerName: "Sanae", tripId: 3, seatNumber: 2, price: 90 },
    { id: 6, passengerName: "Omar", tripId: 3, seatNumber: 3, price: 90 },
    { id: 7, passengerName: "Khadija", tripId: 4, seatNumber: 1, price: 120 },
    { id: 8, passengerName: "Mehdi", tripId: 4, seatNumber: 2, price: 120 },
    { id: 9, passengerName: "Ahmed", tripId: 4, seatNumber: 3, price: 120 },
    { id: 10, passengerName: "Hamza", tripId: 4, seatNumber: 4, price: 120 }
];

for (let ticket of tickets)
{
    for(let trip of trips)
    {
        if (ticket.tripId == trip.id)
        {
            trip.availableSeats--;
        }
    }
}

let i = 0;
let choice = 1
let nextTicketId = 11;

while(choice !== 0)
{
    console.log(`=================================
        RAILWAY MANAGER
=================================

    1. Afficher les trajets
    2. Acheter un ticket
    3. Afficher les tickets
    4. Annuler un ticket
    5. Rechercher un ticket
    6. Filtrer les trajets
    7. Trier les trajets
    0. Quitter`);

    choice = Number(prompt("CHOOSE YOUR NEED NUMBER : "))
    switch(choice) 
    {
        case 1 :
            i = 0;
            while(i < trips.length)
            {

                console.log(`#: ${trips[i].id}`)
                console.log(`   DEPART : ${trips[i].departure}  ==>  DESTINATION : ${trips[i].destination}`)
                console.log(`   DEPARTURE TIME : ${trips[i].departureTime}`)
                console.log(`   ARRIVAL TIME : ${trips[i].arrivalTime}`)
                console.log(`   PRICE : ${trips[i].price}`)
                console.log(`   PLACES DISPONIBLE : ${trips[i].availableSeats}`)
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
                        let seat = 1;
                        let j = 0;

                        while(j < tickets.length)
                        {
                            if(tickets[j].tripId == id && tickets[j].seatNumber == seat)
                            {
                                seat++;
                                j = 0;
                            }
                            else
                            {
                                j++
                            }
                        }

                        let ticket = 
                        {
                            id: nextTicketId,
                            passengerName : name,
                            tripId : trips[i].id,
                            seatNumber : seat,
                            price : trips[i].price
                        };

                        tickets.push(ticket);
                        nextTicketId++;
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
                let f = 0;

                while(f < trips.length)
                {
                    if(trips[f].id == tickets[i].tripId)
                    {
                        console.log(`#${tickets[i].id}`)
                        console.log(`Passanger Name : ${tickets[i].passengerName}`)
                        console.log(`TRAJE : ${trips[f].departure} ===> ${trips[f].destination}`)
                        console.log(`PLACE : ${tickets[i].seatNumber}`)
                        console.log(`PRICE : ${trips[f].price}`)
                    }
                    f++
                }
                i++
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
                    let trip = trips.find(t => t.id == tickets[i].tripId)
                    tickfound = true;
                    console.log(`\nTicket #${tickets[i].id}
Passager : ${tickets[i].passengerName}
Trajet : ${trip.departure} → ${trip.destination}
Place : ${tickets[i].seatNumber}
Prix : ${tickets[i].price} DH\n`)
                }
                i++;
            }
            if (tickfound === false)
            {
                console.log("NO TICKET RELATED TO THIS NAME");
            }
            break;
        
        case 6 :

            i = 0;
            let cityfound = false
            let city = prompt("ENTER THE CITY YOU WANT TO FILTER : ")

            while(i < trips.length)
            {
                if(trips[i].departure == city)
                {
                    cityfound = true
                    console.log(trips[i].departure + " → "
                    + trips[i].destination + " : "
                    + trips[i].price + " DH")
                }
                i++;
            }
            if (cityfound === false)
            {
                console.log("NO TRIP FOUND")
            }
            break;

        case 7 :
            i = 0;
            let g;
            let copy = [...trips];

            while(i < trips.length)
            {
                g = 0;
                while(g < trips.length - 1)
                {
                    if (copy[g].price > copy[g + 1].price)
                    {
                        let swap = copy[g];
                        copy[g] = copy[g + 1];
                        copy[g + 1] = swap;
                    }
                    g++;
                }
                i++;
            }
            i = 0;
            while(i < trips.length)
            {
                console.log(`${copy[i].departure} → ${copy[i].destination} : ${copy[i].price} DH`)
                i++;
            }
            break;

            case 0 :
                console.log("SEE YOU NEXT TRIP");
                break;

            default : 
                console.log("NON OF THE ABOVE");
                break;
    }
}
