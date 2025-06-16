import { Component } from '@angular/core';
import { Menu } from './menu';
import { Cart } from './cart';

@Component({
  selector: 'app-liste',
  imports: [Menu,Cart],
  templateUrl: '../templates/liste.html',
  styleUrl: '../styles/liste.css'
})
export class Liste {

}
