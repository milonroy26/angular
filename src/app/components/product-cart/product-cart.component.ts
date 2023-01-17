import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  public products = [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "color": "black",
      "price": 549,
      "stock": 94,
      "available": "Available",
      "brand": "Apple",
      "category": "smartphones",
      "images": ["https://www.startech.com.bd/image/cache/catalog/cable/wiwu/ch-306/ch-306-01-228x228.webp"]
    },

    {
      "id": 2,
      "title": "Apple Laptop",
      "description": "An apple Laptop which is nothing like Laptop",
      "color": "black",
      "price": 1049,
      "stock": 74,
      "available": "Available",
      "brand": "Apple",
      "category": "Laptop",
      "images": ["https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-228x228.webp"]
    },

    {
      "id": 3,
      "title": "Hp Computer",
      "description": "An Hp Computer which is nothing like Computer",
      "color": "black",
      "price": 2049,
      "stock": 84,
      "available": "Not Available",
      "brand": "Hp",
      "category": "Computer",
      "images": ["https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/antec-dp503-mid-tower-case-and-symphony-360-argb-cpu-cooler-combo-01-228x228.webp"]
    },

    {
      "id": 4,
      "title": "Asus Vivobook",
      "description": "An Asus Laptop which is nothing like Laptop",
      "color": "black",
      "price": 3049,
      "stock": 84,
      "available": "Not Available",
      "brand": "Hp",
      "category": "Computer",
      "images": ["https://www.startech.com.bd/image/cache/catalog/laptop/asus/fx506lh/fx506lh-1-228x228.jpg"]
    },

    {
      "id": 5,
      "title": "Sony ZV-E10 24.2MP",
      "description": "An Soni Camra which is nothing like Soni",
      "color": "black",
      "price": 3049,
      "stock": 84,
      "available": "Available",
      "brand": "Soni",
      "category": "Camra",
      "images": ["https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/zv-e10/zv-e10-01-228x228.jpg"]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
