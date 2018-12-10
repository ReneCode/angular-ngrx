import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

@Component({
  selector: "app-pokemon-state",
  templateUrl: "./pokemon-state.component.html",
  styleUrls: ["./pokemon-state.component.scss"]
})
export class PokemonStateComponent implements OnInit {
  state$;

  constructor(private store: Store<AppState>) {
    this.state$ = this.store
      .select("pokemon")
      .pipe(map(state => JSON.stringify(state, null, 2)));
  }

  ngOnInit() {}
}
