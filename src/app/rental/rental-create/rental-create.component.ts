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
    this.newRental.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Abies_concolor_Warsaw.JPG/800px-Abies_concolor_Warsaw.JPG?fbclid=IwAR1N9kQD-4yVx3rPwEdt8gy27svUZzhro0vAj33jCpkqMDq8U4-kJr2ZgZ0";
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
