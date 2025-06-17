import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Cart } from './cart';
import { ProductService } from '../services/productservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [Menu, Cart, CommonModule],
  templateUrl: '../templates/acceuil.html',
  styleUrl: '../styles/acceuil.css'
})
export class Acceuil implements OnInit {
  productOfTheDay: any = null;

  constructor(private productService: ProductService,private cdr :ChangeDetectorRef) {}

 ngOnInit(): void {
  this.productService.getProductOfTheDay().subscribe({
    next: (res) => {
      const data = res.data;
      data.image_url = `https://frodon.onrender.com${data.image_url}`;  
      this.productOfTheDay = data; 
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error("Erreur lors de la récupération du produit du jour", err);
    }
  });
}

}
