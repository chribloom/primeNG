import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import { TableComponent } from './table/table.component';
import {TabViewModule} from 'primeng/tabview';
import {CalendarModule} from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DetailComponent } from './detail/detail.component';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailComponent,

  ],
  imports: [
    BrowserModule,
    AccordionModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    TabViewModule,
    CalendarModule,
    TableModule,
    ToolbarModule,
    SplitButtonModule,
    PasswordModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
