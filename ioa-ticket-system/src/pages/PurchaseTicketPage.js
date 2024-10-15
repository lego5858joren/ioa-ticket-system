import React, { useState } from 'react';
import './PurchaseTicketPage.css';

function PurchaseTicketPage() {
    const [date, setDate] = useState('');
    const [expressPass, setExpressPass] = useState('None');
    const [message, setMessage] = useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleExpressPassChange = (event) => {
        setExpressPass(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted');

        // Parse selected date
        const selectedDateParts = date.split('-'); // Assuming 'yyyy-MM-dd' format
        const selectedDate = new Date(
            Date.UTC(
                parseInt(selectedDateParts[0], 10), // Year
                parseInt(selectedDateParts[1], 10) - 1, // Month (0-indexed)
                parseInt(selectedDateParts[2], 10) // Day
            )
        );

        // Set 'today' to UTC as well, ignoring time
        const today = new Date();
        const todayUTC = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));

        console.log('Selected Date:', selectedDate);
        console.log('Today (UTC):', todayUTC);

        // Check if the selected date is before today
        if (selectedDate < todayUTC) {
            setMessage('Please select a valid date. The date must be today or in the future.');
            console.log('Date is in the past, returning...');
            return;
        }

        // Convert the selected date to the format "yyyy-MM-dd"
        const formattedDate = selectedDate.toISOString().split('T')[0];
        console.log('Formatted Date:', formattedDate);

        const ticketData = {
            date: formattedDate,
            expressPass,
        };

        console.log('Sending ticket data:', ticketData);

        try {
            const response = await fetch('http://localhost:8080/api/buy-ticket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData),
            });

            console.log('Response received:', response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.text(); // Use `.text()` to read the plain response message
            console.log('Response from backend:', responseData);

            setMessage(responseData);
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
                        <img src={require('../assets/images/SingleUseExpress.jpg')} alt="Single Use Express Pass"/>
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


