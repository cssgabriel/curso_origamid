import countBy from "./countBy.js";
export default class Statistics {
    transactions;
    total;
    payment;
    status;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
    }
    setTotal() {
        return this.transactions
            .filter(checkTransactionValue)
            .reduce((acc, value) => {
            return acc + value.valor;
        }, 0);
    }
    setPayment() {
        return countBy(this.transactions.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
}
function checkTransactionValue(transaction) {
    return transaction.valor !== null;
}
