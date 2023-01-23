import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from 'src/app/Interfaces/cart';
import { userInfo } from 'src/app/Interfaces/userInfo';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: cart[] = []
  totalPrice: number = 0

  user: userInfo = <userInfo>{}

  constructor(private cartService: CartService, private router: Router){}

  ngOnInit(): void {
    this.cart=this.cartService.getCart()
    this.calculateTotal()
  }

  calculateTotal(newQuantity?:number){
    this.totalPrice = 0
    this.cart.forEach(product => {
      this.totalPrice += product.price * product.quantity
    });
  }
  removeProduct(id:number){

    this.cart=this.cartService.removeProduct(id)
    this.calculateTotal()
  }

  onSubmit(){
    this.cartService.setFullname(this.user.fullName)
    this.router.navigate(['/confirm'])
  }
}
