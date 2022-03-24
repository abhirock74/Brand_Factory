import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList: any = [];
  ProductList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }
  getProductData() {
    return this.ProductList.asObservable();
  }
  setProduct(product: any) {
    this.cartDataList.push(...product);
    this.ProductList.next(product)
  }
  addToCart(product: any) {
    this.cartDataList.push(product);
    this.ProductList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)
  }
  getTotalAmount() {
    let grandTotal = 0;
    this.cartDataList.map((a: any) => {
      grandTotal += a.total;
    })
  }
    removeCartData(product: any){
      this.cartDataList.map((a: any, index: any) => {
        if (product.id === a.id) {
          this.cartDataList.splice(index,1)
        }
      })
      this.ProductList.next(this.cartDataList)
    }
  
  removeAllCart() {
    this.cartDataList =[]
    this.ProductList.next(this.cartDataList)
  }
  

}
