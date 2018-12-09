import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import {
  PokemonActionTypes,
  LoadPokemonTrigger,
  LoadPokemonFinish,
  LoadOnePokemonTrigger,
  LoadOnePokemonFinish
} from "./pokemon.actions";
import { PokemonService } from "../services/pokemon.service";

@Injectable({ providedIn: "root" })
export class PokemonEffects {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}

  @Effect()
  loadPokemonTrigger$ = this.actions$.pipe(
    ofType(PokemonActionTypes.LoadPokemonTrigger),
    switchMap((action: LoadPokemonTrigger) =>
      this.pokemonService
        .getAll()
        .pipe(map((data: []) => new LoadPokemonFinish(data)))
    )
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
