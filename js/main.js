import { generateCalendar } from './calendar.js';
import {getHolidaysByCountry} from "./holidays.js";

const button = document.getElementById("generateBtn");

/**
 * Initializes the calendar and holiday generation functionality.
 * - On DOMContentLoaded, triggers the calendar generation.
 * - Handles calendar generation for a given year.
 * - Fetches and displays holidays for a given year and country.
 */



// Trigger calendar generation when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('yearInput').value = new Date().getFullYear();
    document.getElementById('generateBtn').click();
});

/**
 * Handles click event for calendar generation.
 * Parses the year input and generates the calendar.
 */
button.addEventListener("click", () => {
    const year = document.getElementById('yearInput').value;
    const country = document.getElementById('countryInput').value.toUpperCase();
    if (!isNaN(year)) {
        const holidays = getHolidaysByCountry(year, country);
        generateCalendar(year, "calendar", holidays);
    }
});

/**
 * Handles click event for holiday generation.
 * Fetches holidays for the specified year and country, and displays them.
 */
document.getElementById('generateBtn').addEventListener('click', async () => {
    const year = document.getElementById('yearInput').value;
    const country = document.getElementById('countryInput').value.toUpperCase();
    const calendarDiv = document.getElementById('holiday');
    calendarDiv.textContent = 'Loading...';

    try {
        const holidays = await getHolidaysByCountry(year, country);
        calendarDiv.innerHTML = holidays.map(h =>
            `<div>${h.date}: ${h.localName}</div>`
        ).join('');
    } catch (err) {
        calendarDiv.textContent = 'Error fetching holidays.';
    }
});