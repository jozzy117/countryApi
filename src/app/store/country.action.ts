import { createAction, props } from '@ngrx/store';

export const retrievedCountryList = createAction(
    "[Countries API] Country API Success",
    props<{allCountry:any[]}>()
);

export const invokeCountryAPI = createAction(
    '[Countries API] Invoke API'
);

export const retrievedVisitedCountry = createAction(
    '[Countries API] Add Visited Country',
    props<{visitedCountries: any[]}>()
);