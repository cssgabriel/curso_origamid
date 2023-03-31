import countBy from "./countBy.js";

export default class Statistics {
  private transactions;
  total;
  payment;
  status;
  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.payment = this.setPayment();
    this.status = this.setStatus();
  }
  private setTotal() {
    return this.transactions
      .filter(checkTransactionValue)
      .reduce((acc, value) => {
        return acc + value.valor;
      }, 0);
  }
  private setPayment() {
    return countBy(this.transactions.map(({ pagamento }) => pagamento));
  }

  private setStatus() {
    return countBy(this.transactions.map(({ status }) => status));
  }
}

type TransactionValue = Transaction & { valor: number };
function checkTransactionValue(
  transaction: Transaction
): transaction is TransactionValue {
  return transaction.valor !== null;
}
