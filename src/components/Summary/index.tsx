import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

const data = {
  entry: 17500,
  out: 1259,
  total: (entry: number, out: number) => entry + out,
};

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>

        <strong>
          {data.entry.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>

        <strong>
          {data.entry.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>
          {data.entry.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
