export function getMonthName(monthIndex) {
    const names = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return names[monthIndex];
}

export function getWeekdayNames() {
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
}

export function getStartDay(year, month) {
    // Adjust so Monday is 0, Sunday is 6
    return (new Date(year, month, 1).getDay() + 6) % 7;
}

export async function getHolidaysByCountry(year, countryCode) {
    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch holidays');
    }
    return await response.json();
}