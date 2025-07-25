export function getHighlightClass(fullDate, highlights) {

    console.log(highlights)
    const [day, month] = fullDate.split("/");
    const key = `${day}/${month}`;
    return highlights[key] || null;
}
