export default function jsonNormalize(json: unknown[]) {
  if (!(json && typeof json === "object")) return;
  const parseString = JSON.stringify(json);
  const stringFormat = parseString
    .replace(/[\[\]()]/g, "")
    .replaceAll(" R$", ""); //.replace(/[""]/g, "'");
  const arrString = stringFormat.split("{");

  const arrLowerCase = arrString.map((l) => l.toLowerCase());

  return arrLowerCase;
}
