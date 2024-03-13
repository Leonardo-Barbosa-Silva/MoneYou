import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    border-radius: 6px;
    border: 0;
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 1px solid ${(props) => props.theme["green-300"]};
    border-radius: 6px;
    padding: 1rem 1.5rem;
    background: transparent;
    color: ${(props) => props.theme["green-300"]};
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      transition: all 0.3s;
    }
  }
`;
