import { pokemonReducer } from "./store/pokemon.reducer";

export interface IAppState {
  pokemon: Function;
}

export const appState: IAppState = { pokemon: pokemonReducer };
