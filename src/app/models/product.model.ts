export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: Date;
  customerName: string;
}
