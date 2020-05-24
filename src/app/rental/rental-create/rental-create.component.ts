import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ago-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.scss']
})
export class RentalCreateComponent implements OnInit {

  newRental: Rental;
  rentalCategories = Rental.CATEGORIES;
  errors: any[] = [];

  constructor(private rentalService: RentalService,
              private router: Router) { }

  handleImageChange() {
    this.newRental.image = "https://api.adorable.io/avatars/285/abott@adorable.png";
  }

  ngOnInit() {
    this.newRental = new Rental();
  }

  handleImageUpload(imageUrl: string) {
    this.newRental.image = imageUrl;
  }

  handleImageError() {
    this.newRental.image = '';
  }

  createRental() {
    this.rentalService.createRental(this.newRental).subscribe(
      (rental: Rental) => {
        this.router.navigate([`/rentals/${rental._id}`]);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      })
  }

}