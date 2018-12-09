import { PokemonActionTypes } from "./pokemon.actions";

export interface IPokemonState {
  pokemons: object[];
  selectedId: string;
}
const initialState: IPokemonState = {
  pokemons: [],
  selectedId: ""
};

export function pokemonReducer(
  state: IPokemonState = initialState,
  action
): IPokemonState {
  switch (action.type) {
    default:
      return state;
    case PokemonActionTypes.SelectPokemon:
      return {
        ...state,
        selectedId: action.payload
      };
    case PokemonActionTypes.LoadPokemonFinish:
      return {
        ...state,
        pokemons: action.payload
      };
  }
}
