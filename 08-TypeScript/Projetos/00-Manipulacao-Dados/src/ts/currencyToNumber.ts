export default function currencyToNumber(currency: string): number | null {
  const value = Number(currency.replaceAll(".", "").replace(",", "."));
  return isNaN(value) ? null : value;
}
