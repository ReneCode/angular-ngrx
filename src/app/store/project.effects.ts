import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import {
  ProjectActionTypes,
  LoadProjectTrigger,
  LoadProjectFinish
} from "./project.actions";
import { PokemonService } from "../services/pokemon.service";

@Injectable({ providedIn: "root" })
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}

  @Effect()
  loadProjectTrigger$ = this.actions$.pipe(
    ofType(ProjectActionTypes.LoadProjectTrigger),
    switchMap((action: LoadProjectTrigger) =>
      this.pokemonService
        .getAll()
        .pipe(map((data: []) => new LoadProjectFinish(data)))
    )
  );
}
