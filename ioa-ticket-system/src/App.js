import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PurchaseTicketPage from './pages/PurchaseTicketPage';
import RideSelectionPage from './pages/RideSelectionPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/purchase-ticket" element={<PurchaseTicketPage />} />
            <Route path="/ride-selection" element={<RideSelectionPage />} />
        </Routes>
    );
}

export default App;








