import { ReactNode } from "react";

export interface TransactionProps {
  id: number;
  description: string;
  transactionType: "income" | "outcome";
  category: string;
  value: number;
  createdAt: string;
}

export interface TransactionsContextProps {
  transactions: TransactionProps[];
}

export interface TransactionsProviderProps {
  children: ReactNode;
}
