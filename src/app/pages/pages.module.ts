import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ROUTES, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AboutComponent,
                 ShopComponent,
                 ContactComponent,
                 CartComponent,
                 ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'about',component:AboutComponent},
                          {path:'shop',component:ShopComponent},
                          {path:'contact',component:ContactComponent},
                          {path:'cart',component:CartComponent},
                          {path:'product',component:ProductComponent}])
  ],
  exports: [RouterModule]
})
export class PagesModule { }
