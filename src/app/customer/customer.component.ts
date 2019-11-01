import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Customer } from '../model/Customer';
//import { CUSTOMERS } from '../mock/mock-customers';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  title = 'Spring Boot with Angular 8';

  observableCustomers: Observable<Customer[]>;
  constructor() 
  {
    this.customers = [
      {id: 1, name:'Mary', age: 24},
      {id: 2, name:'Peter', age: 18},
      {id: 3, name:'Lussy', age: 31}
      ];
   }

  ngOnInit() {
    this.observableCustomers = of(this.customers);
  }

  trackByFunction(index, customer) {
    return customer.id;
  }

}
