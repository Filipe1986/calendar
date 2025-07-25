export async function AsyncGetHolidaysByCountry(year, countryCode) {
    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch holidays');
    }
    return await response.json();
}

export function getHolidaysByCountry(year, countryCode) {
    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // false for synchronous request
    xhr.send(null);

    if (xhr.status !== 200) {
        throw new Error('Failed to fetch holidays');
    }
    return JSON.parse(xhr.responseText);
}