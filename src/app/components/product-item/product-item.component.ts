import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() id : number = 0
  @Input() imageURL : string = ""
  @Input() productName : string = ""
  @Input() price : number = 0
  quantity: number = 0

  constructor(private cartService: CartService){ }

  ngOnInit(): void {
    this.quantity=1
  }

  onSubmit(): void {
    this.cartService.addProduct({
      id:this.id,
      name:this.productName,
      image:this.imageURL,
      price:this.price,
      quantity:this.quantity
    })
  }
}
