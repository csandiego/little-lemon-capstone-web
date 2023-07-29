import BookingForm from './BookingForm';

export default function BookingPage({availableTimes, dispatch, submitForm}) {
    return (
        <>
            <h1>BookingPage</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </>
    );
}