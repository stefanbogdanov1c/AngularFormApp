import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { first } from 'rxjs';
import { matchValidator } from 'src/app/register/validators/password-validator';
import { dateValidator } from './date.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateTravelComponent implements Validators {

  email = localStorage.getItem('email');

  public accomodationArray = ['Hotel', 'Private', 'Hostel'];
  public transportArray = ['Car', 'Bus', 'Plane', 'Train'];

  public createForm = new FormGroup({
    firstName: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    passportNumber: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    passportID: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    accomodation: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    accomodationName: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    transport: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    locationName: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    arrivalDate: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    arrivalTime: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    departureDate: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
    departureTime: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required],
    }),
  },
  {
    validators: [dateValidator('arrivalDate', 'departureDate')],
  }
  )

  firstName(): any {
    return this.createForm.get('firstName');
  }
  lastname(): any{
    return this.createForm.get('lastName');
  }


  onCreate(): void {
   
    
    if (
      (this.createForm.value.firstName != null ||
      this.createForm.value.firstName != undefined) && 
      (this.createForm.value.lastName != null ||
      this.createForm.value.lastName != undefined)
    ) {
      localStorage.setItem('firstName', this.createForm.value.firstName);
      console.log(localStorage.getItem('firstName'));
      localStorage.setItem('lastName', this.createForm.value.lastName);
      console.log(localStorage.getItem('lastName'));


    }
  }

}
