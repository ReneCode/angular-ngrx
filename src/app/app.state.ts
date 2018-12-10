import { pokemonReducer } from "./store/pokemon.reducer";
import { ActionReducerMap, Action } from "@ngrx/store";

export type AppState = ActionReducerMap<{ pokemon: {} }, Action>;

export const appState: AppState = { pokemon: pokemonReducer };
