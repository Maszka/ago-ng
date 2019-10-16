import { Component, OnInit } from '@angular/core';
import {WorkshopService} from '../shared/workshop.service';
import {Workshop} from '../shared/workshop.model';

@Component({
  selector: 'ago-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.scss']
})
export class WorkshopListComponent implements OnInit {

  workshops: Workshop[] = [];
    
  
  constructor( private workshopService: WorkshopService) { }

  ngOnInit() {
    const workshopObservable = this.workshopService.getWorkshops();

    workshopObservable.subscribe(
      (workshops: Workshop[]) => {
        this.workshops = workshops;
      },
      (err) => {
        console.log("workshop-list component error");
        console.log(err);
      },
      () => {

    }
    )
  }

}
