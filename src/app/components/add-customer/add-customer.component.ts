import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { CustomerService} from '../../services/customer.service';
import { Customer} from '../../model/customer.model';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  // @ts-ignore
  addForm: FormGroup;


  submitted = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    });
  }

  addCustomer() {
    const customer = new Customer();
    customer.firstName = this.addForm.get(`firstName`).value;
    customer.lastName = this.addForm.get('lastName').value;
    customer.email = this.addForm.get('email').value;
    console.log(customer);
    this.customerService.addCustomer(customer).subscribe(data=> {
      console.log(data);
    });
  }









}

