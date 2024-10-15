import axios from 'axios';

// Function to get available rides
const getRides = () => {
    return axios.get('http://localhost:8080/api/rides')
        .then(response => response.data);
};

// Function to buy a ticket
const buyTicket = (ticket) => {
    return axios.post('http://localhost:8080/api/buy-ticket', ticket)
        .then(response => response.data)
        .catch(error => {
            throw new Error("Error purchasing ticket.");
        });
};

// Assign the functions to an object named ticketService
const ticketService = {
    getRides,
    buyTicket,
};

// Export the named object
export default ticketService;











