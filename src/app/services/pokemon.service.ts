import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { of, Observable } from "rxjs";

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

  getAll(): Observable<object> {
    const body = {
      query: `
      {
        pokemons(first: 100){id name  image classification}
        }
      `
    };

    return this.http.post(this.url, body).pipe(
      map((d: any) => d.data.pokemons)
      // map((p: any) => p.name)
    );
  }
}
