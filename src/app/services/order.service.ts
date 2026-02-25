import { Injectable } from '@angular/core';
import { Order } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];

  constructor() {
    this.loadOrders();
  }

  private loadOrders(): void {
    const saved = localStorage.getItem('orders');
    if (saved) {
      this.orders = JSON.parse(saved);
    }
  }

  private saveOrders(): void {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  createOrder(order: Order): void {
    this.orders.push(order);
    this.saveOrders();
  }

  getOrders(): Order[] {
    return this.orders;
  }
}
