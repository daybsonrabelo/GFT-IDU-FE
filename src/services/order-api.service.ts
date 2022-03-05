import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/interfaces/iOrder';
import { IOrderInput } from 'src/interfaces/iOrderInput';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  private baseUrl = 'https://localhost:5001'

  constructor(private http: HttpClient) { }

  getHistory(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/Order`);
  }

  insertOrder(orderInput: IOrderInput): Observable<IOrder> {
    return this.http.post<IOrder>(`${this.baseUrl}/Order`, orderInput);
  }
}
