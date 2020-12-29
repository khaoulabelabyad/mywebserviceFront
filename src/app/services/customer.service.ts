import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer.model';



@Injectable({

})
export class CustomerService {

  baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getCustomersList(): Observable<any> {
    return this.http.get(this.baseURL + 'customers');
  }

  get(id): Observable<any> {
    return this.http.get(this.baseURL + 'customers/customerId');
  }

  create(data): Observable<any> {
    return this.http.post(this.baseURL + 'add');
  }

  update(id, data): Observable<any> {
    return this.http.put(this.baseURL + 'update');
  }


  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `delete/{customerId}`, { responseType: 'text' });
  }

  addCustomer(customer: Customer): Observable<any> {
    console.log(customer);
    return this.http.post<any>(this.baseURL + 'customers', customer );
  }
}
