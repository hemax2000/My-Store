import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart } from 'src/app/Interfaces/cart';
import { product } from 'src/app/Interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  products: product[] = [];

  product: product = <product> {}

  quantity: number = 0


  constructor(private httpService: HttpService, private route: ActivatedRoute, private cartService: CartService){ }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.product.id = data["id"]
    })
    this.httpService.getData().subscribe(data => {
      this.products = data
      this.products= this.products.filter(x=> x.id == this.product.id)

      this.product.name = this.products[0].name
      this.product.imageUrl = this.products[0].imageUrl
      this.product.price = this.products[0].price
      this.product.description = this.products[0].description
    })
    this.quantity = 1

  }

  onSubmit(): void {
    this.cartService.addProduct({
      id:this.product.id,
      name:this.product.name,
      imageUrl:this.product.imageUrl,
      price:this.product.price,
      quantity:this.quantity
    })
  }

  checkData(): Boolean{
      return  this.products == null
  }
}
