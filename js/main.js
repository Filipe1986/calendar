import { generateCalendar } from './calendar.js';

const yearInput = document.getElementById("yearInput");
const button = document.getElementById("generateBtn");

button.addEventListener("click", () => {
    const year = parseInt(yearInput.value, 10);
    if (!isNaN(year)) {
        generateCalendar(year, "calendar");
    }
});

// Initial load
generateCalendar(2025, "calendar");
