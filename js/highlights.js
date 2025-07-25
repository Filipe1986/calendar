export function getHighlightClass(fullDate, highlights) {

    console.log(highlights)
    const [day, month, year] = fullDate.split("/");
    const key = `${day}/${month}/${year}`;
    return highlights[key] || null;
}
