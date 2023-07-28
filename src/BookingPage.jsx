import BookingForm from './BookingForm';

export default function BookingPage({availableTimes, updateTimes}) {
    return (
        <>
            <h1>BookingPage</h1>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </>
    );
}