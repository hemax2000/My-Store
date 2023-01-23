import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  fullName: string = ''
  totalPrice: number = 0

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.fullName = this.cartService.getFullname()
    this.totalPrice = this.cartService.calculateTotal()
    this.cartService.emptyCart()
  }
}
