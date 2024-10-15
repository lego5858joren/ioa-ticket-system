import React, { useEffect, useState } from 'react';
import ticketService from '../services/ticketService';



const RideList = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        ticketService.getRides()
            .then(response => {
                console.log('Fetched rides:', response); // Check if data is being fetched
                setRides(response); // Update state
            })
            .catch(error => {
                console.error('Error fetching rides:', error); // Log error if any
            });
    }, []);

    return (
        <div>
            <h1>Available Rides</h1>
            <ul>
                {rides.map((ride, index) => (
                    <li key={index}>{ride}</li>
                ))}
            </ul>
        </div>
    );
};

export default RideList;


