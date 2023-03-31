import currencyToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";
export default function normalizeTransationAPI(transaction) {
    return {
        nome: transaction.Nome,
        id: transaction.ID,
        data: stringToDate(transaction.Data),
        status: transaction.Status,
        email: transaction.Email,
        moeda: currencyToNumber(transaction["Valor (R$)"]),
        valor: 0,
        pagamento: transaction["Forma de Pagamento"],
        novo: Boolean(transaction["Cliente Novo"]),
    };
}
