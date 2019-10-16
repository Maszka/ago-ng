import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Workshop} from './workshop.model';


@Injectable()
export class WorkshopService {

constructor(private http: HttpClient) {}

public getWorkshopById(workshopId: string): Observable<any> {
    return this.http.get('/api/v1/workshops/' + workshopId);
}

public getWorkshops(): Observable<any> {
    return this.http.get('/api/v1/workshops');
    
}
}  