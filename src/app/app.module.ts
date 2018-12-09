import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { pokemonReducer } from "./store/pokemon.reducer";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { PokemonMasterComponent } from "./components/pokemon/pokemon-master/pokemon-master.component";
import { PokemonDetailComponent } from "./components/pokemon/pokemon-detail/pokemon-detail.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { HomeComponent } from "./components/home/home.component";
import { EffectsModule } from "@ngrx/effects";
import { PokemonEffects } from "./store/pokemon.effects";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PokemonMasterComponent,
    PokemonDetailComponent,
    PokemonComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ pokemon: pokemonReducer }),
    EffectsModule.forRoot([PokemonEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
