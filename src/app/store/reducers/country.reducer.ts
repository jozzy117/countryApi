import { createReducer, on } from '@ngrx/store';
import { retrievedCountryList, retrievedVisitedCountry } from '../country.action';

export const initialState: any = [];
 
const _countryReducer = createReducer(
  initialState,
  on(retrievedCountryList, (state, { allCountry }) => {
    return [...allCountry];
  }),
  on(retrievedVisitedCountry, (state, { visitedCountries }) => {
    return [...state, visitedCountries ]
  })
);
 
export function countryReducer(state: any, action: any) {
  return _countryReducer(state, action);
}