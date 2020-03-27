import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  updateActive(isActive: boolean) {
    this.customerService.updateCustomer(this.customer.key, { active: isActive }).catch(e => console.log(e))
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.key).catch(e => console.log(e))
  }

}
