import { Component } from '@angular/core';
import { Menu } from './menu';
import { Cart } from './cart';
import { ProductService } from '../services/productservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acceuil',
  imports: [Menu,Cart,CommonModule],
  templateUrl: '../templates/acceuil.html',
  styleUrl: '../styles/acceuil.css'
})
export class Acceuil {
productOfTheDay: any = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductOfTheDay().subscribe({
      next: (res) => {
        this.productOfTheDay = res;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération du produit du jour", err);
      }
    });
  }
}
