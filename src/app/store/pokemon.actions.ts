import { Action } from "@ngrx/store";

export enum PokemonActionTypes {
  LoadPokemonTrigger = "LOAD_POKEMON_TRIGGER",
  LoadPokemonFinish = "LOAD_POKEMON_FINISH",
  LoadOnePokemonTrigger = "LOAD_ONE_POKEMON_TRIGGER",
  LoadOnePokemonFinish = "LOAD_ONE_POKEMON_FINISH",
  SelectPokemon = "SELECT_POKEMON",
  SelectNextPokemon = "SELECT_NEXT_POKEMON",
  SetSearchValue = "SET_SEARCH_VALUE"
}

export class LoadPokemonTrigger implements Action {
  readonly type = PokemonActionTypes.LoadPokemonTrigger;
  payload: string;
  constructor(searchValue: string = "") {
    this.payload = searchValue;
  }
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

export class SelectNextPokemon implements Action {
  readonly type = PokemonActionTypes.SelectNextPokemon;
}

export class LoadOnePokemonTrigger implements Action {
  readonly type = PokemonActionTypes.LoadOnePokemonTrigger;
  payload: string;
  constructor(pokemonId: string) {
    this.payload = pokemonId;
  }
}

export class LoadOnePokemonFinish implements Action {
  readonly type = PokemonActionTypes.LoadOnePokemonFinish;
  payload: object;
  constructor(pokemon: object) {
    this.payload = pokemon;
  }
}

export class SetSearchValue implements Action {
  readonly type = PokemonActionTypes.SetSearchValue;
  payload: string;
  constructor(searchValue: string) {
    this.payload = searchValue;
  }
}
