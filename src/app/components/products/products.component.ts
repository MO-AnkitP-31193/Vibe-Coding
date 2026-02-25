import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.filteredProducts = this.productService.searchProducts(this.searchQuery);
    } else {
      this.filteredProducts = this.products;
    }
  }

  viewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }

  addToCart(product: Product, event: Event): void {
    event.stopPropagation();
    this.cartService.addToCart(product);
    this.notificationService.success(`${product.name} added to cart!`);
  }
}
