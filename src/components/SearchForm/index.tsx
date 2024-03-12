import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { SearchFormInputsTypes, searchFormSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function SearchForm() {
  const { getTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchFormInputsTypes>({
    resolver: zodResolver(searchFormSchema),
    mode: "onSubmit",
  });

  async function handleSearchFormSubmit(data: SearchFormInputsTypes) {
    await getTransactions(data.search)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchFormSubmit)}>
      <input
        {...register("search")}
        type="text"
        placeholder="Busque por transações"
      />
      <span>{errors.search?.message}</span>

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={25} /> Buscar
      </button>
    </SearchFormContainer>
  );
}
