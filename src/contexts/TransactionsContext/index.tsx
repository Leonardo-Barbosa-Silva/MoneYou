import { createContext, useEffect, useState } from "react";
import { TransactionProps, TransactionsContextProps, TransactionsProviderProps } from "./types";

export const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: []
});

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    async function getTransactions() {
      const response = await fetch("http://localhost:3333/transactions");
      const json = await response.json();
      setTransactions(json);
    }

    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
