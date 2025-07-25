export async function getHolidaysByCountry(year, countryCode) {
    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch holidays');
    }
    return await response.json();
}