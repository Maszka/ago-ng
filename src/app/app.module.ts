import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { WorkshopComponent } from './workshop/workshop.component';

import {WorkshopModule} from './workshop/workshop.module';
import {AuthModule} from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', redirectTo: '/workshops', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    WorkshopModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
