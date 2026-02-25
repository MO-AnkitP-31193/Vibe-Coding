import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  cartCount = 0;
  isCollapsed = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getItemCount();
    });
    
    const saved = localStorage.getItem('sidebarCollapsed');
    this.isCollapsed = saved === 'true';
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('sidebarCollapsed', String(this.isCollapsed));
  }
}
