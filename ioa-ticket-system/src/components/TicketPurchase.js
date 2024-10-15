import React, { useState, useEffect } from 'react';
import ticketService from '../services/ticketService';
import axios from 'axios';

const TicketPurchase = () => {
    const [rides, setRides] = useState([]);
    const [chosenRide, setChosenRide] = useState('');
    const [ticketDate, setTicketDate] = useState('');
    const [expressPass, setExpressPass] = useState('none');
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/rides')
            .then(response => {
                setRides(response.data);
            })
            .catch(error => {
                console.error("Error fetching rides:", error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create ticket object to send to the back-end
        const ticket = {
            chosenDate: ticketDate,
            expressPass: {
                isUnlimited: expressPass === 'unlimited',
                validDate: ticketDate
            }
        };

        ticketService.buyTicket(ticket)
            .then(response => {
                setMessage(response);
            })
            .catch(error => {
                console.error("Error buying ticket:", error);
            });
    };

    return (
        <div>
            <h2>Purchase a Ticket</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Select a Ride: </label>
                    <select value={chosenRide} onChange={(e) => setChosenRide(e.target.value)}>
                        <option value="">--Select a Ride--</option>
                        {rides.map((ride, index) => (
                            <option key={index} value={ride}>
                                {ride}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Choose Ticket Date: </label>
                    <input
                        type="date"
                        value={ticketDate}
                        onChange={(e) => setTicketDate(e.target.value)}
                    />
                </div>

                <div>
                    <label>Express Pass: </label>
                    <select value={expressPass} onChange={(e) => setExpressPass(e.target.value)}>
                        <option value="none">None</option>
                        <option value="single">Single Use</option>
                        <option value="unlimited">Unlimited Use</option>
                    </select>
                </div>

                <button type="submit">Purchase Ticket</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default TicketPurchase;
