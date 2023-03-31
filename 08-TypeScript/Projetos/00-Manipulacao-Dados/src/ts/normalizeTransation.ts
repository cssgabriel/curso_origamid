import currencyToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";

declare global {
  type TransactionPayment = "Boleto" | "Cartão de Crédito";
  type TransactionStatus =
    | "Paga"
    | "Estornada"
    | "Recusada pela operadora de cartão"
    | "Aguardando pagamento";

  interface TransactionAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransactionStatus;
    Email: string;
    ["Forma de Pagamento"]: TransactionPayment;
    ["Valor (R$)"]: string;
    ["Cliente Novo"]: number;
  }

  interface Transaction {
    nome: string;
    id: number;
    data: string;
    status: TransactionStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransactionPayment;
    novo: boolean;
  }
}

export default function normalizeTransationAPI(transaction: TransactionAPI) {
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
