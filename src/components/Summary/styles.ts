import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: -4.5rem auto 0;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

interface SummaryCardProps {
  $variant?: "gray" | "green" | "red";
  $transactionType?: "income" | "outcome";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};

    svg {
      color: ${props => {
        switch(props.$transactionType) {
          case 'income':
            return css`${props.theme['green-300']}`
          case 'outcome':
            return css`${props.theme['red-300']}`
          default:
            return css`${props.theme.white}`
        }
      }}
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) => {
    switch (props.$variant) {
      case "gray":
        return css`
          background: ${props.theme["gray-600"]};
        `
      case "green":
        return css`
          background: ${props.theme["green-700"]};
        `
      case "red":
        return css`
          background: ${props.theme["red-700"]};
        `
      default:
        return ""
    }
  }}
`;
