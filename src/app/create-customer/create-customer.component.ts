import { Component, OnInit } from '@angular/core';
import { Title} from '@angular/platform-browser';

import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  submitted = false;
  title = 'Spring Boot with Angular 8';
 
  constructor(private customerService: CustomerService,private mtitle: Title) { }
 
  ngOnInit() {
    this.mtitle.setTitle("Create Customer");
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }
 
  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.customer = new Customer();
  }
 
  onSubmit() {
    this.save();
  }

}
