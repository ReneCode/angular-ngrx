import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  IPokemonState,
  selectLoadingOnePokemon
} from "src/app/store/pokemon.reducer";
import { map } from "rxjs/operators";
import { LoadOnePokemonTrigger } from "src/app/store/pokemon.actions";
import { Subscription, Observable } from "rxjs";
import { AppState } from "src/app/app.state";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  pokemon;
  oldSelectedId: string;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.loading$ = store.select(selectLoadingOnePokemon);
    this.subscription = store
      .pipe(
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
      )
      .subscribe();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
