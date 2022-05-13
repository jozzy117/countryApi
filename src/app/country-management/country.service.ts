import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getCountries() {
    return this.http.get(`${this.baseUrl}all`)
          .pipe(map((countries) => countries || []));
  }

  public getCountriesByName(name: string) {
    return this.http.get(`${this.baseUrl}name/${name}?fullText=true`);
  }

}
