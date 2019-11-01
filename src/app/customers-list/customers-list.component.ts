import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
    customers:Observable<Customer[]>;
    customer: Customer;
    title = 'Spring Boot with Angular 8';
  
  constructor(private custService:CustomerService) { }

  ngOnInit() {
    this.reloadData();
  }


  deleteCustomers()
  {
    this.custService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log('ERROR: ' + error)
    );
  }

  reloadData(){
    this.customers=this.custService.getCustomersList();
  }

  updateActive(isActive: boolean,value:Customer) {
    console.log(value);
    this.custService.updateCustomer(value.id,
      { name: value.name, age: value.age, active: isActive })
      
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
          this.reloadData();
        },
        error => console.log(error));
  }
 
  deleteCustomer(value:Customer) {
    console.log(value);
    this.custService.deleteCustomer(value.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
