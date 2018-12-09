import { Component, OnInit, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IPokemonState } from "src/app/store/pokemon.reducer";
import { map } from "rxjs/operators";
import {
  SelectPokemon,
  LoadOnePokemonTrigger
} from "src/app/store/pokemon.actions";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit {
  selectedId$;
  pokemon;

  oldSelectedId: string;

  constructor(private store: Store<{ pokemon: IPokemonState }>) {
    this.selectedId$ = store.pipe(
      select("pokemon"),
      map((state: IPokemonState) => {
        if (this.oldSelectedId !== state.selectedId) {
          this.oldSelectedId = state.selectedId;
          this.store.dispatch(new LoadOnePokemonTrigger(state.selectedId));
        }
        if (!state.onePokemon) {
          this.pokemon = {};
        } else {
          this.pokemon = state.onePokemon;
        }
        return state.selectedId;
      })
    );
  }

  ngOnInit() {}
}
