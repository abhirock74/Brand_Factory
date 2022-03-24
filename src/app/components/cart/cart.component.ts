import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/service/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any = [];
  allProuduct: any = 0;
  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.products = res;
      this.allProuduct = this.cartApi.getTotalAmount();
    })
  }
  removeProduct(item: any) {
    this.cartApi.removeCartData(item);
  }
  removeAllProduct() {
    this.cartApi.removeAllCart();
  }

}
