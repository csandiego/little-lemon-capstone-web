import { useState } from "react";

export default function BookingForm({availableTimes, dispatch, submitForm}) {
    const [state, setState] = useState({});
    return (
        <form onSubmit={e => {
            e.preventDefault();
            submitForm(state);
        }}>
            <label htmlFor="date">Choose date</label>
            <input id="date" type="date" value={state.date} onChange={e => {
                setState({ ...state, date: e.target.value })
                dispatch(e.target.value)
            }} />
            <label htmlFor="time">Choose time</label>
            <select id="time" value={state.time} onChange={e => setState({ ...state, time: e.target.value })}>
                {availableTimes.map(t => <option key={t}>{t}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={state.guest} onChange={e => setState({ ...state, guests: e.target.value })} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={state.occasion} onChange={e => setState({ ...state, occasion: e.target.value })}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}