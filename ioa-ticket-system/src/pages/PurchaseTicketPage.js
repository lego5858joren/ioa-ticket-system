import React, { useState } from 'react';
import './PurchaseTicketPage.css';
import { useNavigate } from 'react-router-dom';

function PurchaseTicketPage() {
    const [date, setDate] = useState('');
    const [expressPass, setExpressPass] = useState('None');
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleDateChange = (e) => {
        setDate(e.target.value); // Ensure the state is getting updated correctly
    };

    const handleExpressPassChange = (event) => {
        setExpressPass(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted');

        // Parse selected date and set time to midnight in local time
        const [year, month, day] = date.split('-'); // Assuming 'date' is in 'YYYY-MM-DD' format from the input field
        const selectedDate = new Date(year, month - 1, day); // Note: Month is 0-indexed in JavaScript
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set today's date to midnight in local time

        console.log('Selected Date (Adjusted):', selectedDate);
        console.log('Today (Local):', today);

        if (selectedDate < today) {
            setMessage('Please select a valid date. The date must be today or in the future.');
            console.log('Date is in the past, returning...');
            return;
        }

        // Proceed with purchasing the ticket
        const formattedDate = selectedDate.toISOString().split('T')[0];
        console.log('Formatted Date:', formattedDate);

        const ticketData = {
            date: formattedDate,
            expressPass,
        };

        try {
            const response = await fetch('http://localhost:8080/api/buy-ticket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.text();
            console.log('Response from backend:', responseData);

            setMessage(responseData);
            // Redirect to the Ride Selection page after successful purchase
            navigate('/ride-selection');
        } catch (error) {
            console.error('Error purchasing ticket:', error);
            setMessage('Error purchasing ticket. Please try again.');
        }
    };

    return (
        <div className="ticket-purchase-container">
            <h1>Purchase a Ticket</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="date">Choose Ticket Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expressPass">Express Pass:</label>
                    <select
                        id="expressPass"
                        value={expressPass}
                        onChange={handleExpressPassChange}
                    >
                        <option value="None">None</option>
                        <option value="Single Use">Single Use Express Pass</option>
                        <option value="Unlimited">Unlimited Express Pass</option>
                    </select>
                </div>
                <button type="submit">Purchase Ticket</button>
            </form>

            {message && <p className="message">{message}</p>}

            {/* Express Pass Info Section */}
            <div className="express-pass-info-container">
                <h2>Express Pass Options</h2>
                <div className="express-pass-options">
                    <div className="express-pass-option">
                        <img src={require('../assets/images/SingleUseExpress.jpg')} alt="Single Use Express Pass" />
                        <p>Single-Use Express Pass: Allows you to skip the line once per ride.</p>
                    </div>
                    <div className="express-pass-option">
                        <img src={require('../assets/images/ExpressPassUnl.jpg')} alt="Unlimited Express Pass" />
                        <p>Unlimited Express Pass: Allows you to skip the line as many times as you like for all rides.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseTicketPage;



