import styled, { css } from "styled-components";

export const TransactionsContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    background: ${(props) => props.theme["gray-700"]};
    padding: 1.25rem 2rem;

    button {
      background: transparent;
      border: 0;
      line-height: 0;
      cursor: pointer;
    }

    &:first-child {
      border-radius: 6px 0 0 6px;
      width: 40%;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover button {
        color: ${(props) => props.theme["red-300"]};
      }
    }
  }
`;

interface PriceHighLightProps {
  $transactionType: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  ${(props) => {
    switch (props.$transactionType) {
      case "income":
        return css`
          color: ${props.theme["green-300"]};
        `;
      case "outcome":
        return css`
          color: ${props.theme["red-300"]};
        `;
      default:
        return "";
    }
  }};
`;
