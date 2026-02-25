import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { 
      id: 1, 
      name: 'Professional Camera', 
      price: 45999, 
      description: 'High-quality DSLR camera with 24MP sensor and 4K video recording', 
      image: 'assets/images/professional camera.webp'
    },
    { 
      id: 2, 
      name: 'Wireless Headphones', 
      price: 2999, 
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery', 
      image: 'assets/images/Wireless Headphones.avif'
    },
    { 
      id: 3, 
      name: 'Designer Coffee Mug', 
      price: 599, 
      description: 'Elegant ceramic mug perfect for your morning coffee or tea', 
      image: 'assets/images/Designer Coffee Mug.jpeg'
    },
    { 
      id: 4, 
      name: 'Desk Plant', 
      price: 799, 
      description: 'Beautiful succulent plant to brighten up your workspace', 
      image: 'assets/images/Desk Plant.webp'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  searchProducts(query: string): Product[] {
    return this.products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }
}
