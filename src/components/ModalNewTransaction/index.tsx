import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButtonsContainer,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import {
  NewTransactionFormInputsTypes,
  newTransactionFormSchema,
} from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function ModalNewTransaction() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputsTypes>({
    resolver: zodResolver(newTransactionFormSchema),
    mode: "onSubmit",
    defaultValues: {
      transactionType: "income",
    },
  });

  const postTransaction = useContextSelector(TransactionsContext, context => {
    return context.postTransaction
  });

  async function handleNewTransactionFormSubmit(
    data: NewTransactionFormInputsTypes
  ) {
    const { description, category, transactionType, value } = data;

    await postTransaction({
      description,
      category,
      transactionType,
      value
    });

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={25} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewTransactionFormSubmit)}>
          <input
            {...register("description")}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register("value", { valueAsNumber: true })}
            type="number"
            placeholder="Valor"
            required
          />
          <input
            {...register("category")}
            type="text"
            placeholder="Categoria"
            required
          />

          <Controller
            control={control}
            name="transactionType"
            render={({ field: { onChange, value } }) => {
              return (
                <TransactionTypeButtonsContainer
                  onValueChange={onChange}
                  value={value}
                >
                  <TransactionTypeButton
                    {...register("transactionType")}
                    $transactionType="income"
                    value="income"
                  >
                    <ArrowCircleUp size={25} /> Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton
                    {...register("transactionType")}
                    $transactionType="outcome"
                    value="outcome"
                  >
                    <ArrowCircleDown size={25} /> Saída
                  </TransactionTypeButton>
                </TransactionTypeButtonsContainer>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
