import { Component } from '@angular/core';
import { Menu } from './menu';
import { Cart } from './cart';

@Component({
  selector: 'app-acceuil',
  imports: [Menu,Cart],
  templateUrl: '../templates/acceuil.html',
  styleUrl: '../styles/acceuil.css'
})
export class Acceuil {

}
