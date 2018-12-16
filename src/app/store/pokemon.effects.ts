import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, concatMapTo } from "rxjs/operators";
import {
  PokemonActionTypes,
  LoadOnePokemonTrigger,
  LoadOnePokemonFinish,
  LoadAllPokemonsTrigger,
  LoadAllPokemonsFinish,
  SelectPokemonId
} from "./pokemon.actions";
import { PokemonService } from "../services/pokemon.service";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";

@Injectable({ providedIn: "root" })
export class PokemonEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private pokemonService: PokemonService
  ) {}

  @Effect()
  loadAllPokemonsTrigger$ = this.actions$.pipe(
    ofType(PokemonActionTypes.LoadAllPokemonsTrigger),
    map(action => action as LoadAllPokemonsTrigger),
    switchMap(() =>
      this.pokemonService
        .getAll()
        .pipe(map((data: object[]) => new LoadAllPokemonsFinish(data)))
    )
  );

  @Effect()
  selectPokemonId$ = this.actions$.pipe(
    ofType(PokemonActionTypes.SelectPokemonId),
    map(action => action as SelectPokemonId),
    map(action => new LoadOnePokemonTrigger(action.payload))
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
