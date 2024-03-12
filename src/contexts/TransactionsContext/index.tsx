import { createContext, useEffect, useState } from "react";
import {
  PostTransactionProps,
  TransactionProps,
  TransactionsContextProps,
  TransactionsProviderProps,
} from "./types";
import { serverAPI } from "../../api/axios";

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function getTransactions(query?: string) {
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
      )

      setTransactions(data);
    } else {
      setTransactions(response);
    }
  }

  async function postTransaction(data: PostTransactionProps) {
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
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactions, postTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
