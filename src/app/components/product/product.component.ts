import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartapiService } from 'src/app/service/cartapi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public ProductList: any;
  constructor(private api: ApiService,
  private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.ProductList = res;
      this.ProductList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
  }
  addtoCart(item:any) {
    this.cartApi.addToCart(item);
  }
  
}
