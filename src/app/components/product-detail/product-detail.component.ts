import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(id);
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.notificationService.success(`${this.product.name} added to cart!`);
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
