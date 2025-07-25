import { generateCalendar } from './calendar.js';
import {getHolidaysByCountry} from "./holidays.js";

const yearInput = document.getElementById("yearInput");
const button = document.getElementById("generateBtn");

button.addEventListener("click", () => {
    const year = parseInt(yearInput.value, 10);
    if (!isNaN(year)) {
        generateCalendar(year, "calendar");
    }
});

document.getElementById('getHolidayBtn').addEventListener('click', async () => {
    const year = document.getElementById('holidayYearInput').value;
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