import { PokemonActionTypes } from "./pokemon.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface IPokemonState {
  selectedId: string;
  onePokemon: object;
  loadingOnePokemon: boolean;
  allPokemons: object[];
}
const initialState: IPokemonState = {
  selectedId: "",
  onePokemon: undefined,
  loadingOnePokemon: false,
  allPokemons: []
};

export function pokemonReducer(
  state: IPokemonState = initialState,
  action
): IPokemonState {
  switch (action.type) {
    case PokemonActionTypes.LoadAllPokemonsFinish:
      return {
        ...state,
        allPokemons: action.payload,
        selectedId: action.payload.length > 0 ? action.payload[0].id : ""
      };

    case PokemonActionTypes.SelectPokemonId:
      return {
        ...state,
        selectedId: action.payload
      };

    case PokemonActionTypes.LoadOnePokemonTrigger:
      return {
        ...state,
        loadingOnePokemon: true
      };
    case PokemonActionTypes.LoadOnePokemonFinish:
      return {
        ...state,
        loadingOnePokemon: false,
        onePokemon: action.payload
      };

    default:
      return state;
  }
}

export const selectPokemonState = createFeatureSelector<IPokemonState>(
  "pokemon"
);
export const selectAllPokemons = createSelector(
  selectPokemonState,
  state => state.allPokemons
);

export const selectFilteredPokemons = (filter: string) => {
  return createSelector(
    selectAllPokemons,
    (pokemons: any) => {
      const sv = filter.toLowerCase();
      return pokemons.filter((p: any) => p.name.toLowerCase().includes(sv));
    }
  );
};

export const selectSelectedPokemonId = createSelector(
  selectPokemonState,
  (state: IPokemonState) => state.selectedId
);

export const selectSelectedPokemon = createSelector(
  selectAllPokemons,
  selectSelectedPokemonId,
  (pokemons, selectedId) => pokemons.find((p: any) => p.id === selectedId)
);

export const selectLoadingOnePokemon = createSelector(
  selectPokemonState,
  (state: IPokemonState) => state.loadingOnePokemon
);

export const selectOnePokemon = createSelector(
  selectPokemonState,
  (state: IPokemonState) => state.onePokemon
);
