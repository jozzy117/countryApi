import { createSelector } from '@ngrx/store'; 
import { AppState } from '../app.state';
 
export const countrySelector =(state: AppState) => state.countries;

export const listAllCountries = createSelector(
    countrySelector,
    (countries: any[]) => {
      return [...countries];
    }
);
   
export const countriesByName = (name:string) => createSelector(
    countrySelector,
    (countries:any[]) => {
        if(name == ''){
            return countries;
        }
        return countries.filter(_ => _.name.common.toLowerCase().includes(name));
    }
)

export const countriesByRegion = (region:string) => createSelector(
    countrySelector,
    (countries:any[]) => {
        if(region == ''){
            return countries;
        }
        return countries.filter(_ => _.region.toLowerCase() === region.toLowerCase());
    }
)