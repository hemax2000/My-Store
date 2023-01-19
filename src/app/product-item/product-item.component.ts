import { Component, Input } from '@angular/core';

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

  constructor(){ }

  ngOnInit(): void {
    console.log(this.id)
  }
}
