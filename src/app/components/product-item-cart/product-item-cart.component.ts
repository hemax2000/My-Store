import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item-cart',
  templateUrl: './product-item-cart.component.html',
  styleUrls: ['./product-item-cart.component.css']
})
export class ProductItemCartComponent {

  @Input() id: number = 0
  @Input() imageURL: string = ""
  @Input() productName: string = ""
  @Input() price: number = 0
  @Input() quantity: number = 0
  @Output() removeProduct: EventEmitter<number> = new EventEmitter
  @Output() calcTotal = new EventEmitter()


  constructor(private cartService:CartService) { }
  ngOnInit(): void {
  }

  checkRemove(){

    if(this.quantity<=0){
      this.removeProduct.emit(this.id)
    }else{
      this.cartService.changeQuantity(this.id,this.quantity)
      this.calcTotal.emit(this.quantity)
    }
  }
}
