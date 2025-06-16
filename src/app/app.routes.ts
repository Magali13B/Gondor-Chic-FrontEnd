import { Routes } from '@angular/router';
import {Login} from './components/login';
import { Createproduct } from './components/createproduct';

export const routes: Routes = [
  {
    path : '', component : Login
  },
  {
    path : 'create-product',component : Createproduct
  }
];
