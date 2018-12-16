import { Action } from "@ngrx/store";

export enum PokemonActionTypes {
  LoadAllPokemonsTrigger = "LOAD_ALL_POKEMONS_TRIGGER",
  LoadAllPokemonsFinish = "LOAD_ALL_POKEMONS_FINISH",
  LoadOnePokemonTrigger = "LOAD_ONE_POKEMON_TRIGGER",
  LoadOnePokemonFinish = "LOAD_ONE_POKEMON_FINISH",
  SelectPokemonId = "SELECT_POKEMON_ID"
  // SelectNextPokemon = "SELECT_NEXT_POKEMON",
  // SelectPrevPokemon = "SELECT_PREV_POKEMON"
}

export class LoadAllPokemonsTrigger implements Action {
  readonly type = PokemonActionTypes.LoadAllPokemonsTrigger;
}

export class LoadAllPokemonsFinish implements Action {
  readonly type = PokemonActionTypes.LoadAllPokemonsFinish;
  payload: object[];
  constructor(pokemons: object[]) {
    this.payload = pokemons;
  }
}

export class SelectPokemonId implements Action {
  readonly type = PokemonActionTypes.SelectPokemonId;
  payload: string;
  constructor(pokemonId: string) {
    this.payload = pokemonId;
  }
}

// export class SelectNextPokemon implements Action {
//   readonly type = PokemonActionTypes.SelectNextPokemon;
// }

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
