import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { NotificationService } from '../../services/notification.service';
import { CartItem, Order } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  cartItems: CartItem[] = [];
  total = 0;
  orderPlaced = false;
  orderId = '';
  customerName = '';

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]]
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();

    if (this.cartItems.length === 0) {
      this.router.navigate(['/cart']);
    }
  }

  placeOrder(): void {
    if (this.checkoutForm.valid) {
      this.orderId = Math.floor(100000 + Math.random() * 900000).toString();
      this.customerName = this.checkoutForm.value.name;

      const order: Order = {
        id: this.orderId,
        items: this.cartItems,
        total: this.total,
        date: new Date(),
        customerName: this.customerName
      };

      this.orderService.createOrder(order);
      this.cartService.clearCart();
      this.orderPlaced = true;
      this.notificationService.success(`Order #${this.orderId} placed successfully!`);
    }
  }

  continueShopping(): void {
    this.router.navigate(['/products']);
  }
}
