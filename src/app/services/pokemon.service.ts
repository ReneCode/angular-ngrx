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
        pokemons(first: 100){id name  image }
      }`
    };

    return this.http
      .post(this.url, body)
      .pipe(map((d: any) => d.data.pokemons));
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
