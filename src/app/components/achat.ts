import { Component } from '@angular/core';
import { Menu } from './menu';
import { Cart } from './cart';

@Component({
  selector: 'app-achat',
  imports: [Menu,Cart],
  templateUrl: '../templates/achat.html',
  styleUrl: '../styles/achat.css'
})
export class Achat {

}
