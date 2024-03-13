import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { SearchFormInputsTypes, searchFormSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { memo } from "react";

function SearchFormComponent() {
  // Agora consome somente uma função do contexto, re-renderizando somente se este mudar e não se os outros mudarem
  const getTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.getTransactions
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchFormInputsTypes>({
    resolver: zodResolver(searchFormSchema),
    mode: "onSubmit",
  });

  async function handleSearchFormSubmit(data: SearchFormInputsTypes) {
    await getTransactions(data.search);
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


// Agora só vai ser re-renderizado caso seu estado interno ou suas props mudarem e não se seus pais mudarem
export const SearchForm = memo(SearchFormComponent)