import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map, filter } from "rxjs/operators";
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

  getAll(searchValue: string = ""): Observable<object> {
    const body = {
      query: `
      {
        pokemons(first: 100){id name  image }
      }`
    };

    return this.http.post(this.url, body).pipe(
      map((d: any) => d.data.pokemons),
      map((pokemons: any[]) => {
        if (!searchValue) {
          return pokemons;
        } else {
          const sv = searchValue.toLowerCase();
          return pokemons.filter((p: any) => p.name.toLowerCase().includes(sv));
        }
      })
    );
  }

  getOne(id: string): Observable<object> {
    if (!id) {
      return of(null);
    }
    const body = {
      query: `
      query q($id: String) {
        pokemon(id: $id) {
          id
          name
          image
          classification
          types
          resistant
          evolutions {
            id
            name
          }
        }
      }`,
      variables: {
        id: id
      }
    };

    return this.http.post(this.url, body).pipe(map((d: any) => d.data.pokemon));
  }
}
