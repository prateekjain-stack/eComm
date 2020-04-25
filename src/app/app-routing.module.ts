import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
	{ path: '', component: ShoppinglistComponent },
	{ path: 'products', component: ShoppinglistComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
