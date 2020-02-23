import { RentalService } from './../shared/rental.service';
import { Component, OnInit } from '@angular/core';
import {Rental} from '../shared/rental.model';


@Component({
  selector: 'ago-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.scss']
})
export class RentalCreateComponent implements OnInit {

  newRental: Rental;
  rentalCategories = Rental.CATEGORIES;

  constructor(private rentalService: RentalService) { }

  handleImageChange() {
    this.newRental.image = "https://upload.wikimedia.org/wikipedia/commons/0/01/Gibson_Les_Paul_54_Custom.jpg";
  }

  ngOnInit() {
    this.newRental = new Rental();
  }

  createRental() {
    this.rentalService.createRental(this.newRental).subscribe(
      () => {

      },
      () => {

      })
  }

}
