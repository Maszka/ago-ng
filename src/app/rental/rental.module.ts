import { AuthGuard } from './../auth/shared/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MapModule} from '../common/map/map.module';
import {Daterangepicker} from 'ng2-daterangepicker';
import {ImageUploadModule} from '../common/components/image-upload/image-upload.module';
import {NgPipesModule} from 'ngx-pipes';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';

import { RentalService } from './shared/rental.service';
import {HelperService} from '../common/service/helper.service';
import {BookingService} from '../booking/shared/booking.service';

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { RentalSearchComponent } from './rental-search/rental-search.component';


const routes: Routes = [
    {path: 'rentals', 
    component: RentalComponent,
    children: [
        {path: '', component: RentalListComponent},
        {path: 'new', component: RentalCreateComponent, canActivate: [AuthGuard]},
        {path: ':rentalId', component: RentalDetailComponent, canActivate: [AuthGuard]},
        {path: ':city/items', component: RentalSearchComponent}
    ]
  }]


@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailComponent,
        RentalCreateComponent,
        RentalDetailBookingComponent,
        RentalSearchComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MapModule,
        Daterangepicker,
        ImageUploadModule,
        NgPipesModule
    ],
    providers: [
        RentalService, 
        HelperService,
        BookingService
    ]
})
export class RentalModule{}