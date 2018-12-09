import { Component, OnInit, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IPokemonState } from "src/app/store/pokemon.reducer";
import { map } from "rxjs/operators";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit {
  selectedId$;

  constructor(private store: Store<{ pokemon: IPokemonState }>) {
    this.selectedId$ = store.pipe(
      select("pokemon"),
      map((data: IPokemonState) => {
        console.log("ID:", data.selectedId);
        return data.selectedId;
      })
    );
    // this.id$ = store.pipe(
    //   select("project"),
    //   map((data: IPokemonState) => data.id)
    // );
  }

  ngOnInit() {}
}
