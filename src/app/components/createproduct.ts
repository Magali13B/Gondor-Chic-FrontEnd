import { Component } from '@angular/core';
import { ProductService } from '../services/productservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Menu } from './menu';

@Component({
  selector: 'app-createproduct',
  standalone: true,
  imports: [CommonModule, FormsModule, Menu],
  templateUrl: '../templates/createproduct.html',
  styleUrls: ['../styles/createproduct.css']
})
export class Createproduct {
  constructor(private productService: ProductService) {}

  product: any = {
    name: '',
    description: '',
    price: null,
    stock: null,
    imageUrl: '',
    isProductOfTheDay: false
  };

  onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.product.imageUrl = reader.result as string;
      console.log('Image base64 prête :', this.product.imageUrl);
    };
    reader.readAsDataURL(file);
  }
}


    onSubmit() {
    this.productService.addProduct(this.product).subscribe({
      next: (res) => {
        alert('Produit ajouté avec succès !');
        this.product = {
          name: '',
          description: '',
          price: null,
          stock: null,
          imageUrl: '',
          isProductOfTheDay: false
        };
      },
      error: (err) => {
        console.error('Erreur:', err);
        alert('Erreur lors de l’ajout du produit.');
      }
    });
  }

}
