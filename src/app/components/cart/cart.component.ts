import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../entities/product.entity';
import { CartItem } from '../../entities/cartItem.entity';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  public shoppingCartItems$: Observable<CartItem[]> = of([]);
  public shoppingCartItems: CartItem[] = [];
  public totalPayable: any = 0;
  public totalItemPrice: any = 0;
  public totalDiscount: any = 0;

  constructor(private cartService: CartService, public router: Router) { 

    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(items => {
      this.shoppingCartItems = items

      for (let i = 0; i < items.length; i++) {
        this.totalItemPrice += (items[i].product.mrp * items[i].quantity);
        this.totalDiscount += ((items[i].product.mrp * items[i].product.discount/100) * items[i].quantity);
      }

      this.totalPayable = this.totalItemPrice - this.totalDiscount;

    });

    console.log(this.shoppingCartItems);
    if(this.shoppingCartItems.length == 0){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  addItem(product){
    this.cartService.addToCart(product);
  }

  subtractItem(product){
    this.cartService.subtractFromCart(product);
  }

  removeItem(product){
    this.cartService.removeFromCart(product);
  }

}