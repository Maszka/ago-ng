import { AuthGuard } from './../auth/shared/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';

import { RentalService } from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';


const routes: Routes = [
    {path: 'rentals', 
    component: RentalComponent,
    children: [
        {path: '', component: RentalListComponent},
        {path: 'new', component: RentalCreateComponent, canActivate: [AuthGuard]},
        {path: ':rentalId', component: RentalDetailComponent, canActivate: [AuthGuard]}
    ]
  }]


@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailComponent,
        RentalCreateComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [RentalService]
})
export class RentalModule{}