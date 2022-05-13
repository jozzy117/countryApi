import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { countriesByName, countriesByRegion, listAllCountries } from 'src/app/store/selectors/country.selector';
import { invokeCountryAPI } from 'src/app/store/country.action';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries = this.store.pipe(select(listAllCountries));
  regionSelected: string = 'Filter By Region';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(invokeCountryAPI());
  }

  search(event: Event) {
    const searchedVal = (event.target as HTMLInputElement).value;
    this.countries = this.store.pipe(select(countriesByName(searchedVal)));
  }

  selectChange(region: any) {
    this.countries = this.store.pipe(select(countriesByRegion(region)));
  }

}
