export default function stringToDate(string) {
    const [date, time] = string.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minute] = time.split(":").map(Number);
    return new Date(day, month - 1, year, hour, minute);
}
