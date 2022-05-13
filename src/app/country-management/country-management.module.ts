import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CountryResolver } from '../shared/resolvers/shared.resolver';
import { countryReducer } from '../store/reducers/country.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffect } from './country.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '../store/custom.serializer';
import { reducers } from '../store/reducers';

export const routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full'},
  { 
    path: 'countries', 
    component: CountriesComponent, 
    pathMatch: 'full'
  },
  { 
    path: 'countries/:id', 
    component: CountryComponent,
    resolve: {
      country: CountryResolver
    } 
  }
];

@NgModule({
  declarations: [
    CountriesComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    EffectsModule.forRoot([CountryEffect]),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({serializer: CustomSerializer}),
  ],
  providers: [
    CountryResolver
  ]
})
export class CountryManagementModule { }
