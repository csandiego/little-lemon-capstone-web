import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from "./api";
import { useReducer } from "react";

export function updateTimes(state, date) {
    return fetchAPI(new Date(date))
}

export function initializeTimes() {
    return fetchAPI(new Date());
}

export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes)
    const navigate = useNavigate()
    const submitForm = formData => {
        if (submitAPI(formData)) {
            navigate('/confirmed');
        }
    }
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}