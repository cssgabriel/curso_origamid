export default async function fetchData(url) {
    const res = await fetch(url);
    return await await res.json();
}
