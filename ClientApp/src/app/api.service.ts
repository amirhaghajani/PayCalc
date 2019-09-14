import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Year } from './year/year.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = '/api/SampleData';

  constructor(private httpClient: HttpClient) { }

  public getContacts() {
    return this.httpClient.get<Year[]>(`${this.apiURL}/GetYears`);
  }
}
