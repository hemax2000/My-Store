import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: {id: number; productName: string; price: number; imageURL: string; description: string; }[] = [];

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    this.httpService.getData().subscribe(data=>{
      this.products = data
    })
  }
}
