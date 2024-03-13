import { ReactNode } from "react";

export interface TransactionProps {
  id: number;
  description: string;
  transactionType: "income" | "outcome";
  category: string;
  value: number;
  createdAt: string;
}

export interface PostTransactionProps {
  description: string;
  transactionType: "income" | "outcome";
  category: string;
  value: number;
}

export interface TransactionsContextProps {
  transactions: TransactionProps[];
  getTransactions: (query?: string) => void;
  postTransaction: (data: PostTransactionProps) => void;
}

export interface TransactionsProviderProps {
  children: ReactNode;
}