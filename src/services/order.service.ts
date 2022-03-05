import { Injectable } from '@angular/core';
import { IOrderInput } from 'src/interfaces/iOrderInput';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrderInput(input: string) {
    const orderInput: IOrderInput = {
      input: input
    }

    return orderInput;
  }
}
