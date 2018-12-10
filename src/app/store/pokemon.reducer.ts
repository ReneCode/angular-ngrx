import { PokemonActionTypes } from "./pokemon.actions";

export interface IPokemonState {
  rawPokemons: object[];
  pokemons: object[];
  selectedId: string;
  onePokemon: object;
}
const initialState: IPokemonState = {
  rawPokemons: [],
  pokemons: [],
  selectedId: "",
  onePokemon: undefined
};

export function pokemonReducer(
  state: IPokemonState = initialState,
  action
): IPokemonState {
  switch (action.type) {
    case PokemonActionTypes.SelectPokemon:
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

    case PokemonActionTypes.LoadOnePokemonFinish:
      return {
        ...state,
        onePokemon: action.payload
      };

    default:
      return state;
  }
}
