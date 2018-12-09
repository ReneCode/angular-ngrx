import { Action } from "@ngrx/store";

export enum PokemonActionTypes {
  LoadPokemonTrigger = "LOAD_POKEMON_TRIGGER",
  LoadPokemonFinish = "LOAD_POKEMON_FINISH",
  SelectPokemon = "SELECT_POKEMON"
}

export class LoadPokemonTrigger implements Action {
  readonly type = PokemonActionTypes.LoadPokemonTrigger;
}

export class LoadPokemonFinish implements Action {
  readonly type = PokemonActionTypes.LoadPokemonFinish;
  payload: string[];
  constructor(pokemons: string[]) {
    this.payload = pokemons;
  }
}
export class SelectPokemon implements Action {
  readonly type = PokemonActionTypes.SelectPokemon;
  payload: string;
  constructor(pokemonId: string) {
    this.payload = pokemonId;
  }
}
