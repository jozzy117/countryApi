import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CountryService } from './country.service';
 
@Injectable()
export class CountryEffect {
  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) {}
 
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Countries API] Invoke API'),
      mergeMap(() =>
        this.countryService
          .getCountries()
          .pipe(map((data) => ({ type: '[Countries API] Country API Success', allCountry: data })))
      )
    )
  );
}