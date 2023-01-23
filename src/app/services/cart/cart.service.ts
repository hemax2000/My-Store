import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: {id:number, name:string,image:string, price:number, quantity:number}[] = []
  userFullName: string = ''
  constructor() { }

  getCart(){
    return this.cart
  }

  addProduct(product: {id:number, name:string, image:string, price:number, quantity:number}) {
    this.cart.push(product)
    alert(product.name+" added to cart")
    return this.cart;
  }

  removeProduct(id:number) {
    this.cart = this.cart.filter(x=> x.id != id)
    alert("Product removed from cart")
    return this.cart
  }

  changeQuantity(id:number,newQ:number){
    const index = this.cart.findIndex(x=>x.id == id)
    this.cart[index].quantity = newQ
    return this.cart
  }


  setFullname(name:string){
    this.userFullName = name
  }

  getFullname(){
    return this.userFullName
  }

  calculateTotal(){
    var totalPrice = 0
    this.cart.forEach(product => {
      totalPrice += product.price * product.quantity
      console.log(product.quantity)
    });

    return totalPrice
  }

  emptyCart(){
    this.cart = []
  }
}
