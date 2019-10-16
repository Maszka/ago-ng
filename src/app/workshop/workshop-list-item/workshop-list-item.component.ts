import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ago-workshop-list-item',
  templateUrl: './workshop-list-item.component.html',
  styleUrls: ['./workshop-list-item.component.scss']
})
export class WorkshopListItemComponent implements OnInit {

  @Input() workshop: any;
  
  constructor() { }

  ngOnInit() {
  }

}
