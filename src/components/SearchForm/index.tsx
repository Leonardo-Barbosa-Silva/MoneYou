import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { SearchFormInputsTypes, searchFormSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputsTypes>({
    resolver: zodResolver(searchFormSchema),
    mode: 'onSubmit'
  });

  function handleSearchFormSubmit(data: SearchFormInputsTypes) {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchFormSubmit)}>
      <input
        {...register("search")}
        type="text"
        placeholder="Busque por transações"
      />

      <button type="submit">
        <MagnifyingGlass size={25} /> Buscar
      </button>
    </SearchFormContainer>
  );
}
