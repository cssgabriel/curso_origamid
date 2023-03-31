export default async function fetchData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok)
            throw new Error("ERRO: " + res.status);
        return await await res.json();
    }
    catch (err) {
        if (err instanceof Error)
            console.error("fetchData: " + err.message);
        return null;
    }
}
