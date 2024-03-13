import { useCallback, useEffect, useState } from "react";
import {
  PostTransactionProps,
  TransactionProps,
  TransactionsContextProps,
  TransactionsProviderProps,
} from "./types";
import { serverAPI } from "../../api/axios";
import { createContext } from "use-context-selector";

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  // Agora só irá ser re-renderizado (e os seus filhos dependentes) se sua dependência mudar e não se seus pais mudarem!
  const getTransactions = useCallback(async (query?: string) => {
    const response: TransactionProps[] = await (
      await serverAPI.get("/transactions", {
        params: {
          _sort: "-createdAt",
        },
      })
    ).data;

    if (query) {
      const data: TransactionProps[] = response.filter((transaction) =>
        Object.values(transaction).some((value) =>
          value.toString().toLowerCase().match(query.toLocaleLowerCase())
        )
      );

      setTransactions(data);
    } else {
      setTransactions(response);
    }
  }, [])

  const postTransaction = useCallback(async (data: PostTransactionProps) => {
    const { description, category, transactionType, value } = data;

    const newTransaction = (
      await serverAPI.post("/transactions", {
        description,
        category,
        transactionType,
        value,
        createdAt: new Date(),
      })
    ).data;

    setTransactions((prevState) => [newTransaction, ...prevState]);
  }, []);

  const deleteTransaction = useCallback(async (id: number) => {
    await serverAPI.delete(`/transactions/${id}`);

    setTransactions((prevState) =>
      prevState.filter((transaction) => transaction.id != id)
    );
  }, []);

  useEffect(() => {
    getTransactions();
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
