import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomersList();
  }

  getCustomersList() {
    console.log(this.customerService.getCustomersList);
  }

  // getCustomersList() {
  //   this.customerService.getCustomersList().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(customers => {
  //     this.customers = customers;
  //   });
  // }

  deleteCustomers() {
    this.customerService.deleteAll().catch(e => console.log(e))
  }

}
