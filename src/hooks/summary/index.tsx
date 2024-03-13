import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summaryData = transactions.reduce(
    (acc, transaction) => {
      if (transaction.transactionType === "income") {
        acc.income += transaction.value;
        acc.total += transaction.value;
      } else if (transaction.transactionType === "outcome") {
        acc.outcome += transaction.value;
        acc.total += transaction.value;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return summaryData;
}
