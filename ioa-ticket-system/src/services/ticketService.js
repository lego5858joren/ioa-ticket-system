import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/rides';

const getRides = () => {
    return axios.get(baseUrl).then(response => response.data);
};

// Assigning to a variable before exporting
const ticketService = {
    getRides,
};

export default ticketService;


