import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Employee } from './employee';

const apiUrl = 'https://api.angularbootcamp.com';

// Configure the amount of latency and jitter to simulate
const apiLatency = 100;

// Set to 3000 to see that out-of-order replies don't cause any problem:
const apiJitter = 100;

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoaderService {
  constructor(private http: HttpClient) {}

  getList(searchText: string): Observable<Employee[]> {
    // One of several ways to set up HTTP request URL parameters
    // without concatenating them manually.
    const params = new HttpParams()
      .set('q', searchText)
      .set('_limit', '20');

    return this.http
      .get<Employee[]>(apiUrl + '/employees', { params })
      .pipe(delay(randomDelay()));
  }

  getDetails(employeeId: number): Observable<Employee> {
    return this.http
      .get<Employee>(`${apiUrl}/employees/${employeeId}`)
      .pipe(delay(randomDelay()));
  }
}

function randomDelay() {
  return Math.round(apiLatency + Math.random() * apiJitter);
}
