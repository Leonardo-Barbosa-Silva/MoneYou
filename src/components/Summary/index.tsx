import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { valueFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/summary";

export function Summary() {
  const summaryData = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard $transactionType="income">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{valueFormatter.format(summaryData.income)}</strong>
      </SummaryCard>

      <SummaryCard $transactionType="outcome">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{valueFormatter.format(summaryData.outcome)}</strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{valueFormatter.format(summaryData.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
