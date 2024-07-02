import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import {
  PostTransactionProps,
  TransactionProps,
  TransactionsContextProps,
  TransactionsProviderProps,
} from "./types";

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const loadTransactions = () => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  };

  const saveTransactions = (newTransactions: TransactionProps[]) => {
    setTransactions(newTransactions);
    localStorage.setItem('transactions', JSON.stringify(newTransactions));
  };

  const getTransactions = useCallback((query?: string) => {
    loadTransactions();
    if (query) {
      const filteredTransactions = transactions.filter((transaction) =>
        Object.values(transaction).some((value) =>
          value.toString().toLowerCase().includes(query.toLowerCase())
        )
      );
      setTransactions(filteredTransactions);
    } else {
      loadTransactions();
    }
  }, [transactions]);

  const postTransaction = useCallback((data: PostTransactionProps) => {
    const newTransaction = {
      ...data,
      id: Date.now(),
      createdAt: new Date(),
    };
    const updatedTransactions = [newTransaction, ...transactions];
    
    saveTransactions(updatedTransactions);
  }, [transactions]);

  const deleteTransaction = useCallback((id: number) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    saveTransactions(updatedTransactions);
  }, [transactions]);

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        getTransactions,
        postTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
