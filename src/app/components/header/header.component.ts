import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Product } from '../../entities/product.entity';
import { CartItem } from '../../entities/cartItem.entity';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public shoppingCartItems$: Observable<CartItem[]>;
  public totalItems = 0;

  constructor(private cartService: CartService, public router: Router) { 
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(items => {
      this.totalItems = 0;
      for (let i = 0; i < items.length; i++) {
          this.totalItems += items[i].quantity;
      }
    });
  }

  ngOnInit() {
  }

  goToCart(){
    this.router.navigate(['/cart']);
  }

}
