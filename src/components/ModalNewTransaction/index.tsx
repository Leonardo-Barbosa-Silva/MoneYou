import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function ModalNewTransaction() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={25} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Valor" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton $transactionType="income" value="income">
              <ArrowCircleUp size={25} /> Entrada
            </TransactionTypeButton>

            <TransactionTypeButton $transactionType="outcome" value="outcome">
              <ArrowCircleDown size={25} /> Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
