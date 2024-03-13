import { useMemo } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  );

  // Agora só irá ser re-renderizado (e o cálculo novamente) se sua dependência (transactions) mudar e não se seus pais mudarem!
  const summaryData = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return summaryData;
}
