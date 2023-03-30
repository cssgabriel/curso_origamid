export default function jsonNormalize(json) {
    if (!(json && typeof json === "object"))
        return;
    const parseString = JSON.stringify(json);
    const stringFormat = parseString
        .replace(/[\[\]()]/g, "")
        .replaceAll(" R$", "");
    const arrString = stringFormat.split("{");
    const arrLowerCase = arrString.map((l) => l.toLowerCase());
    return arrLowerCase;
}
