import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: {id:number, name:string, image:string, price:number, quantity:number}[] = []
  totalPrice: number = 0

  fullName: string = ''
  address: string = ''
  creditCard: string = ''
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
    this.cartService.setFullname(this.fullName)
    this.router.navigate(['/confirm'])
  }
}
