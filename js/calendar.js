import { getMonthName, getWeekdayNames, getStartDay } from './utils.js';
import { getHighlightClass } from './highlights.js';

export function generateCalendar(year, containerId, holidays) {
    const calendarEl = document.getElementById(containerId);
    calendarEl.innerHTML = '';




    for (let month = 0; month < 12; month++) {
        const monthEl = document.createElement("div");
        monthEl.className = "month";

        const title = document.createElement("div");
        title.className = "month-name";
        title.textContent = `${getMonthName(month)} ${year}`;
        monthEl.appendChild(title);

        const weekdaysRow = document.createElement("div");
        weekdaysRow.className = "weekdays";
        getWeekdayNames().forEach(day => {
            const el = document.createElement("div");
            el.textContent = day;
            weekdaysRow.appendChild(el);
        });
        monthEl.appendChild(weekdaysRow);

        const daysGrid = document.createElement("div");
        daysGrid.className = "days";

        const startDay = getStartDay(year, month);
        for (let i = 0; i < startDay; i++) {
            const empty = document.createElement("div");
            empty.className = "empty";
            daysGrid.appendChild(empty);
        }

        var highlights = holidaysToHighlights(holidays)


        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement("div");
            const fullDate = `${day}/${month + 1}/${year}`;


            const highlight = getHighlightClass(fullDate, highlights );
            if (highlight) cell.classList.add(highlight);
            cell.textContent = day;
            daysGrid.appendChild(cell);
        }

        monthEl.appendChild(daysGrid);
        calendarEl.appendChild(monthEl);
    }

    function holidaysToHighlights(holidays) {
        const highlights = {};
        if (Array.isArray(holidays)) {
            holidays.forEach(h => {
                const [, month, day] = h.date.split("-");
                let highlightClass = "highlight-yellow";
                if (h.types.includes("Optional")) highlightClass = "highlight-blue";
                if (h.localName.toLowerCase().includes("páscoa")) highlightClass = "highlight-green";
                highlights[`${parseInt(day)}/${parseInt(month)}`] = highlightClass;
            });
        }
        return highlights;
    }
}
