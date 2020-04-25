import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';
import { CartItem } from '../entities/cartItem.entity';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()

export class CartService {

  private itemsInCartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  private itemsInCart: CartItem[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(item => this.itemsInCart = item);
  }

  public addToCart(product: Product) {
    let itemFound = false;
    for (let i = 0; i < this.itemsInCart.length; i++) {
        let item: CartItem = this.itemsInCart[i];
        if (item.product.id == product.id) {
            this.itemsInCart[i].quantity += 1;
            itemFound = true;
            break;
        }
    }

    if(itemFound == false){
        let item: CartItem = {
            'product':product,
            'quantity':1
        }
        this.itemsInCart.push(item);
    }

    this.itemsInCartSubject.next([...this.itemsInCart]);
  }

  public subtractFromCart(product: Product) {
    for (let i = 0; i < this.itemsInCart.length; i++) {
        let item: CartItem = this.itemsInCart[i];
        if (item.product.id == product.id) {
            this.itemsInCart[i].quantity -= 1;
            break;
        }
    }

    this.itemsInCartSubject.next([...this.itemsInCart]);
  }

  public removeFromCart(product: Product) {
    for (let i = 0; i < this.itemsInCart.length; i++) {
        let item: CartItem = this.itemsInCart[i];
        if (item.product.id == product.id) {
            this.itemsInCart.splice(i,1);
            break;
        }
    }

    this.itemsInCartSubject.next([...this.itemsInCart]);
  }

  public getItems(): Observable<CartItem[]> {
    return this.itemsInCartSubject;
  }
}