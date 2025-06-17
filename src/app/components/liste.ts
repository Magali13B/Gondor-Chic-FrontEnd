import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Cart } from './cart';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [Menu, Cart, CommonModule],
  templateUrl: '../templates/liste.html',
  styleUrls: ['../styles/liste.css']
})
export class Liste implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (res) => {
        console.log('✅ Produits récupérés :', res);
        this.products = res;
      },
      error: (err) => {
        console.error('❌ Erreur lors du chargement des produits :', err);
      }
    });
  }
}
