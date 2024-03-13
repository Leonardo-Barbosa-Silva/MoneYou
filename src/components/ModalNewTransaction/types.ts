import * as z from "zod";

export const newTransactionFormSchema = z
  .object({
    description: z.string(),
    value: z.number(),
    category: z.string(),
    transactionType: z.enum(["income", "outcome"]),
  })
  .transform((props) => ({
    ...props,
    value:
      (props.transactionType === "income" && props.value < 0) ||
      (props.transactionType === "outcome" && props.value > 0)
        ? -props.value
        : props.value,
  }));

export type NewTransactionFormInputsTypes = z.infer<
  typeof newTransactionFormSchema
>;
