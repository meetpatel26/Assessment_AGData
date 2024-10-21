import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';

declare var google: any;

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent {
  personForm = this.fb.group({
    // name is required
    name: ['', Validators.required],
    address: [''],
  });

  persons: Person[] = [];
  autocomplete: any;

  constructor(private fb: FormBuilder, private personService: PersonService) { }

  //It runs when the component is initialized.
  ngOnInit(): void {
    // Fetch the list of persons when the component is initialized
    this.getPersons();
    // Initialize Google Places Autocomplete for address.
    this.initAutocomplete();
  }

  // Initialize method for Google Places Autocomplete address.
  initAutocomplete(): void {
    const addressInput = document.getElementById('address') as HTMLInputElement;
    this.autocomplete = new google.maps.places.Autocomplete(addressInput, {
      types: ['geocode'],  // Restrict autocomplete to geographical locations only
    });
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      this.personForm.patchValue({
        address: place.formatted_address
      });
    });
  }

  // Handles form submission.
  onSubmit(): void {
    this.personForm.markAllAsTouched();
    if (this.personForm.valid) {
      const person = this.personForm.value as Person;
      this.personService.addPerson(person).subscribe((result) => {
        // Add the new person to the local array
        this.persons.push(person);  
        this.personForm.reset();
      });
    }
  }

  // Fetch all persons from the API and also update the local list
  getPersons(): void {
    this.personService.getPersons().subscribe((data) => {
      this.persons = data;
    });
  }
}
