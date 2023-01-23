import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  products: {id: number; productName: string; price: number; imageURL: string; description: string; }[] = [];

  id: number=0
  name: string = ''
  imageUrl: string = ''
  price: number =0
  description: string = ''
  quantity: number = 0


  constructor(private httpService: HttpService, private route: ActivatedRoute, private cartService: CartService){ }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data["id"]
    })
    this.httpService.getData().subscribe(data => {
      this.products = data
      this.products= this.products.filter(x=> x.id == this.id)

      this.name = this.products[0].productName
      this.imageUrl = this.products[0].imageURL
      this.price = this.products[0].price
      this.description = this.products[0].description
    })
    this.quantity = 1
    
  }

  onSubmit(): void {
    this.cartService.addProduct({
      id:this.id,
      name:this.name,
      image:this.imageUrl,
      price:this.price,
      quantity:this.quantity
    })
  }

  checkData(): Boolean{
      return  this.products== null
  }
}
