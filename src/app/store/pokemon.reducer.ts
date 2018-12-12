import { PokemonActionTypes } from "./pokemon.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface IPokemonState {
  selectedId: string;
  onePokemon: object;
  loadingOnePokemon: boolean;
  pokemons: object[];
  rawPokemons: object[];
}
const initialState: IPokemonState = {
  selectedId: "",
  onePokemon: undefined,
  loadingOnePokemon: false,
  pokemons: [],
  rawPokemons: []
};

export function pokemonReducer(
  state: IPokemonState = initialState,
  action
): IPokemonState {
  switch (action.type) {
    case PokemonActionTypes.SelectPokemonId:
      return {
        ...state,
        selectedId: action.payload
      };
    case PokemonActionTypes.SetRawPokemon:
      return {
        ...state,
        rawPokemons: action.payload
      };
    case PokemonActionTypes.LoadPokemonFinish:
      return {
        ...state,
        pokemons: action.payload,
        selectedId: action.payload.length === 0 ? "" : action.payload[0].id
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
  state => state.pokemons
);
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
