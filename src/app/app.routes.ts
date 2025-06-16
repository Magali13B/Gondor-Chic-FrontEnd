import { Routes } from '@angular/router';
import {Login} from './components/login';
import { Createproduct } from './components/createproduct';
import { Acceuil } from './components/acceuil';

export const routes: Routes = [
  {
    path : '', component : Login
  },
  {
    path : 'create-product',component : Createproduct
  },
  {
    path : 'acceuil',component : Acceuil
  }
];
