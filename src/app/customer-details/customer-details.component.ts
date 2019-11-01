import { Component, OnInit, Input  } from '@angular/core';

import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer';
import { CustomersListComponent } from '../customers-list/customers-list.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: Customer;


 
  constructor(private customerService: CustomerService, private listComponent: CustomersListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean,value:any) {
    this.customerService.updateCustomer(value,
      { name: value.name, age: value.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        },
        error => console.log(error));
  }
 
  deleteCustomer(id:number) {
    this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
