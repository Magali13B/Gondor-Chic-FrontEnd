import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Cart } from './cart';
import {CommonModule, DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-achat',
  standalone: true,
  imports: [Menu, Cart, DecimalPipe, CommonModule],
  templateUrl: '../templates/achat.html',
  styleUrls: ['../styles/achat.css']
})
export class Achat implements OnInit {
  cartItems: any[] = [];
  subTotal: number = 0;
  total: number = 0;

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.recalculateTotals();
  }

  recalculateTotals(): void {
    this.subTotal = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    this.total = this.subTotal * 1.2;
  }

  onQuantityChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const newQuantity = input?.valueAsNumber;

    if (!newQuantity || newQuantity < 1) return;

    this.cartItems[index].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.recalculateTotals();
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.recalculateTotals();
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
