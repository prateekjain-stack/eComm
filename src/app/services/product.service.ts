import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor(private http: HttpClient) {
        this.products = [
            { id: '1', name: 'Steelbird 1', photo: 'item2.jpg', discount:30, mrp:2000 },
            { id: '2', name: 'Vega 1', photo: 'item3.png', discount:50, mrp:4000 },
            { id: '3', name: 'Steelbird 2', photo: 'item1.jpg', discount:20, mrp:6000 },
            { id: '4', name: 'Steelbird 13', photo: 'item4.png', discount:80, mrp:2000 },
            { id: '5', name: 'Vega 2', photo: 'item1.jpg', discount:50, mrp:4000 },
            { id: '6', name: 'Steelbird 4', photo: 'item2.jpg', discount:10, mrp:6000 },
            { id: '7', name: 'Steelbird 5', photo: 'item2.jpg', discount:45, mrp:2000 },
            { id: '8', name: 'Vega 3', photo: 'item3.png', discount:50, mrp:4000 },
            { id: '9', name: 'Steelbird 6', photo: 'item4.png', discount:20, mrp:6000 },
            { id: '10', name: 'Steelbird 7', photo: 'item2.jpg', discount:25, mrp:2000 },
            { id: '11', name: 'Vega 4', photo: 'item1.jpg', discount:75, mrp:4000 },
            { id: '12', name: 'Steelbird 8', photo: 'item4.png', discount:50, mrp:6000 },
            { id: '13', name: 'Steelbird 9', photo: 'item2.jpg', discount:30, mrp:2000 },
            { id: '14', name: 'Vega 5', photo: 'item1.jpg', discount:40, mrp:4000 },
            { id: '15', name: 'Steelbird 10', photo: 'item3.png', discount:50, mrp:6000 }
        ];
    }

    getProducts(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}