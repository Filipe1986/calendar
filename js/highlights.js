export function getHighlightClass(fullDate) {
    const highlights = {
        "1/1": "highlight-yellow",
        "2/1": "highlight-blue",
        "20/3": "highlight-green",
        "6/5": "highlight-red",
        "14/4": "highlight-orange",
        "16/4": "highlight-orange",
        "18/4": "highlight-orange"
    };

    const [day, month] = fullDate.split("/");
    const key = `${day}/${month}`;
    return highlights[key] || null;
}
