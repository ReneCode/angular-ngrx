import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, withLatestFrom, filter } from "rxjs/operators";
import {
  PokemonActionTypes,
  LoadPokemonTrigger,
  LoadPokemonFinish,
  LoadOnePokemonTrigger,
  LoadOnePokemonFinish,
  SetRawPokemon
} from "./pokemon.actions";
import { PokemonService } from "../services/pokemon.service";
import { Store, select, Action } from "@ngrx/store";
import { AppState } from "../app.state";
import { IPokemonState } from "./pokemon.reducer";
import { of } from "rxjs";

@Injectable({ providedIn: "root" })
export class PokemonEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private pokemonService: PokemonService
  ) {}

  @Effect()
  // use rawPokemons as cache
  loadPokemonTrigger$ = this.actions$.pipe(
    ofType(PokemonActionTypes.LoadPokemonTrigger),
    map(action => action as LoadPokemonTrigger),
    withLatestFrom(this.store$.pipe(select("pokemon"))),
    switchMap(result => {
      const action: LoadPokemonTrigger = result[0];
      const state: IPokemonState = result[1];
      if (state.rawPokemons.length > 0) {
        // cache is filled
        const sv = action.payload.toLowerCase();
        const filteredPokemons = state.rawPokemons.filter((p: any) =>
          p.name.toLowerCase().includes(sv)
        );
        return of(filteredPokemons).pipe(
          map(data => new LoadPokemonFinish(data))
        );
      } else {
        // first call - get data from API and fill cache
        return this.pokemonService.getAll(action.payload).pipe(
          switchMap((data: []) => {
            // dispatch two actions
            return [new LoadPokemonFinish(data), new SetRawPokemon(data)];
          })
        );
      }
    })
  );

  @Effect()
  LoadOnePokemonTrigger$ = this.actions$.pipe(
    ofType(PokemonActionTypes.LoadOnePokemonTrigger),
    switchMap((action: LoadOnePokemonTrigger) =>
      this.pokemonService
        .getOne(action.payload)
        .pipe(map((data: object) => new LoadOnePokemonFinish(data)))
    )
  );
}
