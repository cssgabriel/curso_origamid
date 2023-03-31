export default function currencyToNumber(currency) {
    const value = Number(currency.replaceAll(".", "").replace(",", "."));
    return isNaN(value) ? null : value;
}
