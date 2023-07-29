import { render, screen } from "@testing-library/react";
import { updateTimes, initializeTimes } from './Main';

test('Initialize times', () => {
    expect(initializeTimes()).not.toBeNull()
});

test('Update times', () => {
    expect(updateTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'], new Date())).not.toBeNull()
})