import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/svg/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalNewTransaction } from "../ModalNewTransaction";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <ModalNewTransaction />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
