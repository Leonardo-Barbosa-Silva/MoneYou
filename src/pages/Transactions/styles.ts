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
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-radius: 6px 0 0 6px;
      width: 40%;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`;


interface PriceHighLightProps {
  $variant: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  ${(props) => {
    switch (props.$variant) {
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
