import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';


import { WorkshopListComponent } from './workshop-list/workshop-list.component';
import { WorkshopListItemComponent } from './workshop-list-item/workshop-list-item.component';
import { WorkshopComponent } from './workshop.component';

import { WorkshopService } from './shared/workshop.service';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';

const routes: Routes = [
    {path: 'workshops', 
    component: WorkshopComponent,
    children: [
        {path: '', component: WorkshopListComponent},
        {path: ':workshopId', component: WorkshopDetailComponent}
    ]
  }]


@NgModule({
    declarations: [
        WorkshopListComponent,
        WorkshopListItemComponent,
        WorkshopComponent,
        WorkshopDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    providers: [WorkshopService]
})
export class WorkshopModule{}