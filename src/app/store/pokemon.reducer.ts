import { PokemonActionTypes } from "./pokemon.actions";

export interface IPokemonState {
  pokemons: object[];
  selectedId: string;
  onePokemon: object;
  searchValue: string;
}
const initialState: IPokemonState = {
  pokemons: [],
  selectedId: "",
  onePokemon: undefined,
  searchValue: ""
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
        pokemons: action.payload,
        selectedId: action.payload.length === 0 ? "" : action.payload[0].id
      };

    case PokemonActionTypes.LoadOnePokemonFinish:
      return {
        ...state,
        onePokemon: action.payload
      };

    case PokemonActionTypes.SetSearchValue:
      return {
        ...state,
        searchValue: action.payload
      };
  }
}
