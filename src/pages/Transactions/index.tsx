import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { dateFormatter, valueFormatter } from "../../utils/formatter";

export default function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <main>
        <Summary />

        <SearchForm />

        <TransactionsContainer>
          <TransactionsTable>
            <tbody>
              {transactions.map((item) => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>
                    <PriceHighLight $transactionType={item.transactionType}>
                      {valueFormatter.format(item.value)}
                    </PriceHighLight>
                  </td>
                  <td>{item.category}</td>
                  <td>{dateFormatter.format(new Date(item.createdAt))}</td>
                </tr>
              ))}
            </tbody>
          </TransactionsTable>
        </TransactionsContainer>
      </main>
    </div>
  );
}
