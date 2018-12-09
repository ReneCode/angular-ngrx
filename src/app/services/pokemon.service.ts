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
        pokemons(first: 50){id name  image }
      }`
    };

    return this.http
      .post(this.url, body)
      .pipe(map((d: any) => d.data.pokemons));
  }

  getOne(id: string): Observable<object> {
    const body = {
      query: `
      {
        pokemon(id: ${id}) {
          id name maxCP evolutions { id } classification
        }
      }`
    };

    return this.http.post(this.url, body).pipe(map((d: any) => d.data.pokemon));
  }
}
