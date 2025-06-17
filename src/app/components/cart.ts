import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: '../templates/cart.html',
  styleUrl: '../styles/cart.css'
})
export class Cart {
   constructor(private router: Router) {}

  goToCart(){
    alert("ahhhaaa");
     //this.router.navigate(['/achat']);
  }
}
