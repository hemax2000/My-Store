import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../../product-item/product-item.component';
import * as prodData from '../../../assets/data.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: {id: number; productName: string; price: number; imageURL: string; description: string; }[] = [];

  constructor(){}

  ngOnInit(): void {

    this.products = [
      {
        "id": 1,
        "productName": "Book",
        "price": 9.99,
        "imageURL": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "description": "You can read it!"
      },
      {
        "id": 2,
        "productName": "Headphones",
        "price": 249.99,
        "imageURL": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "description": "Listen to stuff!"
      },
      {
        "id": 3,
        "productName": "Backpack",
        "price": 79.99,
        "imageURL": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "description": "Carry things around town!"
      },
      {
        "id": 4,
        "productName": "Glasses",
        "price": 129.99,
        "imageURL": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "description": "Now you can see!"
      },
      {
        "id": 5,
        "productName": "Cup",
        "price": 4.99,
        "imageURL": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "description": "Drink anything with it!"
      },
      {
        "id": 6,
        "productName": "Shirt",
        "price": 29.99,
        "imageURL": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
        "description": "Wear it with style!"
      }
    ];
  }
}
