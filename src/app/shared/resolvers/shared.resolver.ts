import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CountryService } from "src/app/country-management/country.service";

@Injectable()
export class CountriesResolver implements Resolve<Observable<Object>> {
    constructor(private _country: CountryService) {}
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> {
        return this._country.getCountries();
    }
}

@Injectable()
export class CountryResolver implements Resolve<Observable<Object>> {
    constructor(private _country: CountryService) {}
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> {
        const id = route.paramMap.get('id') || '';
        return this._country.getCountriesByName(id);
    }
}