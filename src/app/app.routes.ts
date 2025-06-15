import { Routes } from '@angular/router';
import {Login} from './components/login';
import {AddToCart} from './add-to-cart/add-to-cart';

export const routes: Routes = [
  {
    path : '', component : Login  
  },
  {
    path : 'addToCart', component : AddToCart 
  }
];
