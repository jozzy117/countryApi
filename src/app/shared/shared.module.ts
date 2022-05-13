import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    NgxSpinnerModule,
    MatCardModule
  ],
  exports: [
    FormsModule,
    NavBarComponent,
    NgxSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
