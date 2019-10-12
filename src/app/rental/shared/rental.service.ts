import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model'

@Injectable()
export class RentalService {

private rentals: Rental[] = [
    {
        id: "1",
        title: "Nice Apartment",
        city: "Krakow",
        street: "Karmelicka",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "really nice",
        dailyRate: 345,
        shared: false,
        createdAt: "11.10.2019"
      },
      {
        id: "2",
        title: "So nice Apartment",
        city: "Krakow",
        street: "Karmelicka",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "really nice",
        dailyRate: 345,
        shared: false,
        createdAt: "11.10.2019"
      },
      {
        id: "3",
        title: "Cool Apartment",
        city: "Krakow",
        street: "Karmelicka",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "really nice",
        dailyRate: 345,
        shared: false,
        createdAt: "11.10.2019"
      },
      {
        id: "4",
        title: "Fine Apartment",
        city: "Krakow",
        street: "Karmelicka",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "really nice",
        dailyRate: 345,
        shared: false,
        createdAt: "11.10.2019"
      }
];

public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>((observer) => {

        setTimeout(() => {
            const foundRental = this.rentals.find((rental) => {
                return rental.id == rentalId;
            });

            observer.next(foundRental);
        }, 500);
    });
}

public getRentals(): Observable <Rental[]> {
    
    return new Observable<Rental[]>((observer) => {

        setTimeout(() => {
            observer.next(this.rentals);
        }, 1000);
    
    }); 
}

}  