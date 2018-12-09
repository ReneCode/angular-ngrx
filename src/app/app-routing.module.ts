import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "pokemon", component: PokemonComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
