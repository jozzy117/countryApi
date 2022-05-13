import { Params } from "@angular/router";
import * as fromRouter from '@ngrx/router-store';

export interface AppState {
    countries: any[];
    router: fromRouter.RouterReducerState<any>;
}

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}