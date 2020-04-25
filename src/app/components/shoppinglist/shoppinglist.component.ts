import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {

  private products: Product[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  sortItemList(sortOn){
    if("hl" == sortOn){
      this.products = this.products.sort((itemA, itemB) => {
                          let itemAPrice = itemA.mrp - (itemA.mrp * (itemA.discount/100));
                          let itemBPrice = itemB.mrp - (itemB.mrp * (itemB.discount/100));
                          return itemBPrice - itemAPrice;
                      });
    }
    else if("lh" == sortOn){
      this.products = this.products.sort((itemA, itemB) => {
                          let itemAPrice = itemA.mrp - (itemA.mrp * (itemA.discount/100));
                          let itemBPrice = itemB.mrp - (itemB.mrp * (itemB.discount/100));
                          return itemAPrice - itemBPrice;
                      });
    }
    else if("discount" == sortOn){
      this.products = this.products.sort((itemA, itemB) => {
                          return itemB.discount - itemA.discount;
                      });
    }
  }

  filterOnPrice(priceRange){
    let allProducts = this.productService.getProducts();
    this.products = allProducts.filter(item => {
                      let itemPrice = item.mrp - (item.mrp * (item.discount/100));
                      return itemPrice >= priceRange[0] && itemPrice <= priceRange[1];
                    });
  }

  addToCart(product){
    this.cartService.addToCart(product);
  }



}
