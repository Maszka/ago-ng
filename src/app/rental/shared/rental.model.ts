import {Booking } from '../../booking/shared/booking.model'

export class Rental {

    static readonly CATEGORIES = ['Sprzęt muzyczny', 'Dla dzieci', 'Majsterkowanie', 'Sprzątanie', 'Fotografia', 'Inne'];

    _id: string;
    title: string;
    city: string;
    street: string;
    category: string;
    image: string;
    description: string;
    price: number;
    createdAt: string;
    bookings: Booking[];
}