import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HolidayDetailsComponent } from './components/holiday-details/holiday-details.component';
import { HeaderComponent } from './components/header/header.component';

import { HolidaysService } from './services/holidays.service';

const Routing: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:id', component: HolidayDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HolidayDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routing)
  ],
  providers: [HolidaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
