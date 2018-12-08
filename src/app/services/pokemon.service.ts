import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  readonly url: string = "https://graphql-pokemon.now.sh";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url);
  }
}
