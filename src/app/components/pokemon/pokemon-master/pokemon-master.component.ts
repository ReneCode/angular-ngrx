import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import {
  selectSelectedPokemonId,
  selectFilteredPokemons
} from "src/app/store/pokemon.reducer";
import {
  SelectPokemonId,
  LoadAllPokemonsTrigger
} from "src/app/store/pokemon.actions";
import { AppState } from "src/app/app.state";

@Component({
  selector: "app-pokemon-master",
  templateUrl: "./pokemon-master.component.html",
  styleUrls: ["./pokemon-master.component.scss"]
})
export class PokemonMasterComponent implements OnInit, OnDestroy {
  selectedId$: Observable<string>;
  pokemons$: Observable<object[]>;
  searchValue$ = new BehaviorSubject<string>("");

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.pokemons$ = this.searchValue$.pipe(
      switchMap((sv: string) =>
        // searchValue has changed => filter the list
        this.store.pipe(
          select(selectFilteredPokemons(sv)),
          map(data => {
            // select the first element
            if (data.length > 0) {
              this.store.dispatch(new SelectPokemonId(data[0].id));
            }
            return data;
          })
        )
      )
    );

    this.selectedId$ = this.store.pipe(select(selectSelectedPokemonId));

    this.store.dispatch(new LoadAllPokemonsTrigger());
  }

  ngOnDestroy() {}

  selectPokemon(pokemon: any) {
    this.store.dispatch(new SelectPokemonId(pokemon.id));
  }

  onSearchChange(searchValue: string) {
    this.searchValue$.next(searchValue);
  }
}
