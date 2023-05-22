async function fetchData(url: string) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error();
  }
}

export default fetchData;
