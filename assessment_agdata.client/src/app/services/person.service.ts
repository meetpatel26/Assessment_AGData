import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = environment.apiUrl + '/api/person';

  constructor(private http: HttpClient) { }

  // Method to add a new person and takes a Person object as a parameter.
  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  // Method to retrieve a list of persons from the API
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
