import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  selectLoadingOnePokemon,
  selectOnePokemon
} from "src/app/store/pokemon.reducer";
import { Subscription, Observable } from "rxjs";
import { AppState } from "src/app/app.state";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  pokemon$: Observable<object>;
  loading$: Observable<boolean>;

  constructor(store: Store<AppState>) {
    this.loading$ = store.pipe(select(selectLoadingOnePokemon));

    this.pokemon$ = store.pipe(select(selectOnePokemon));
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
