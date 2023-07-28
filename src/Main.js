import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { useReducer } from "react";

export function updateTimes(state) {
    return state;
}

export function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes)
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />} />
            </Routes>
        </main>
    );
}