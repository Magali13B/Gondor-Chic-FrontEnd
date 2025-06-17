import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Menu} from './menu';
import {Cart} from './cart';
import {CommonModule} from '@angular/common';
import {ProductService} from '../services/productservice';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [Menu, Cart, CommonModule, FormsModule],
  templateUrl: '../templates/liste.html',
  styleUrls: ['../styles/liste.css']
})
export class Liste implements OnInit {
  products: any[] = [];
  selectedProduct: any = null;
  selectedQuantity: number = 1;

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: any) => {
      this.products = data;
      console.log("Liste des produits:", this.products);
      this.cdr.detectChanges();
    });
  }

  openQuantityPopup(product: any): void {
    this.selectedProduct = product;
    this.selectedQuantity = 1;
  }

  cancelPopup(): void {
    this.selectedProduct = null;
    this.selectedQuantity = 1;
  }

  addToCart(): void {
    if (!this.selectedProduct || this.selectedQuantity < 1) return;

    let cartItems: any[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingIndex = cartItems.findIndex(item => item.id === this.selectedProduct.id);

    if (existingIndex > -1) {
      cartItems[existingIndex].quantity += this.selectedQuantity;
      console.log(`Produit existant : +${this.selectedQuantity} → total = ${cartItems[existingIndex].quantity}`);
    } else {
      const newItem = {
        id: this.selectedProduct.id,
        name: this.selectedProduct.name,
        price: this.selectedProduct.price,
        imageUrl: this.selectedProduct.imageUrl,
        quantity: this.selectedQuantity
      };
      cartItems.push(newItem);
      console.log(`Nouveau produit ajouté : ${newItem.name} (x${newItem.quantity})`);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

    this.cancelPopup();
  }

}
