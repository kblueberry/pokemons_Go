import { createContext, ReactNode, useContext, useState } from "react";
import { fetchOne } from "./helper";

type PokemonDetailsState = {
  loading: boolean;
  error: null | Error;
  data: null | PokemonDetails;
  onChange: (url: string) => void;
};

export const PokemonDetailsContext = createContext<PokemonDetailsState>({
  loading: false,
  error: null,
  data: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
});

export default function PokemonDetailsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [fetchState, setFetchState] = useState<PokemonDetailsState>({
    loading: false,
    error: null,
    data: null
  } as PokemonDetailsState);
  const { loading, error, data } = fetchState;

  const onChange = (url: string) => {
    setFetchState({
      loading: true,
      error: null,
    } as PokemonDetailsState);
    fetchOne(url)
      .then((pokemon) => {
        setFetchState({
          loading: false,
          error: null,
          data: pokemon,
        } as PokemonDetailsState);
      })
      .catch((error) =>
        setFetchState({
          loading: false,
          error,
        } as PokemonDetailsState)
      );
  };

  return (
    <PokemonDetailsContext.Provider
      value={{
        loading,
        error,
        data,
        onChange,
      }}
    >
      {children}
    </PokemonDetailsContext.Provider>
  );
}

export function usePokemonDetails() {
  const pokemonDetails = useContext(PokemonDetailsContext);

  if (!pokemonDetails) {
    throw Error("usePokemonDetails must be used in PokemonDetailsProvider");
  }

  return pokemonDetails;
}
