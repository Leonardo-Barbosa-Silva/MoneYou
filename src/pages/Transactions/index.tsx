import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

const data = [
  {
    id: 0,
    target: "Desenvolvimento de site",
    value: 12000,
    service: "Venda",
    date: "29/10/2023",
  },
  {
    id: 1,
    target: "Hamburguer",
    value: -12000,
    service: "Alimentação",
    date: "05/04/2024",
  },
];

function getCapitalTransactionType(value: number) {
  if (value > 0) {
    return "income";
  } else {
    return "outcome";
  }
}

export default function Transactions() {
  return (
    <div>
      <Header />
      <main>
        <Summary />

        <SearchForm />

        <TransactionsContainer>
          <TransactionsTable>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.target}</td>
                  <td>
                    <PriceHighLight
                      $variant={getCapitalTransactionType(item.value)}
                    >
                      {item.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </PriceHighLight>
                  </td>
                  <td>{item.service}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </TransactionsTable>
        </TransactionsContainer>
      </main>
    </div>
  );
}
