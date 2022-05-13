import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../app.state";
import { countryReducer } from "./country.reducer";

export const reducers: ActionReducerMap<AppState> = {
    countries: countryReducer,
    router: routerReducer,
};