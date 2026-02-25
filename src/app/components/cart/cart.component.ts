import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.cartItems = this.cartService.getCartItems();
      this.total = this.cartService.getTotal();
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number, productName: string): void {
    this.cartService.removeFromCart(productId);
    this.notificationService.success(`${productName} removed from cart`);
  }

  proceedToCheckout(): void {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/checkout']);
    }
  }

  continueShopping(): void {
    this.router.navigate(['/products']);
  }
}
