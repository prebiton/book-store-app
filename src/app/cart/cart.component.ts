import { Component, OnInit } from '@angular/core';
import { CartDataService } from './services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  cartItemList: any[] | undefined;

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItemsList.subscribe((cartItems: any[] | undefined) => {
      console.log(cartItems);
      this.cartItemList = cartItems;
    });
  }

  
  handleRemoveFromCart(pdt: any): void {
    console.log(pdt);
    console.log("handleRemoveFromCart")
    this.cartDataService.removeFromCart(pdt);
  }

}
