import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { GraphComponent } from './graph/graph.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {FormsModule} from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatDividerModule} from '@angular/material/divider';
import { Output, EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SliderComponent } from './slider/slider.component'; 
import {MatSliderModule} from '@angular/material/slider';
import { ListComponent } from './list/list.component';
import {MatListModule} from '@angular/material/list';
import { SnakbarComponent } from './snakbar/snakbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    GraphComponent,
    SidenavComponent,
    DatepickerComponent,
    SliderComponent,
    ListComponent,
    SnakbarComponent
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GridsterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatSliderModule,
    MatListModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
