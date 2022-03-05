import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/interfaces/iOrder';
import { OrderApiService } from 'src/services/order-api.service';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RestauranteFE';

  vInput = '';
  vOutput = '';
  orderHistory: IOrder[] = [];
  isLoading = false;
  disableButton = true;

  constructor(
    private orderApiService: OrderApiService,
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.orderApiService.getHistory().subscribe(res => {
      this.orderHistory = res.map(r => {
        return {
          input: r.input,
          output: r.output
        }
      });
      this.isLoading = false;
    });
  }

  onClick() {
    if (!this.isValid()) {
      alert('should inform at least one selection');
      return;
    }
    this.orderApiService.insertOrder(this.orderService.getOrderInput(this.vInput)).subscribe(res => {
      this.vOutput = res.output;
      this.loadData();
    });
  }

  isValid() {
    return this.vInput.split(',').length > 1;
  }

}
