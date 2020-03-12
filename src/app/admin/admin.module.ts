import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardInnerComponent } from './dashboard-inner/dashboard-inner.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { MatChipsModule } from "@angular/material/chips";
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export var options: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
  declarations: [DashboardComponent, DashboardInnerComponent, ProductsComponent, OrdersComponent, CategoriesComponent, CategoriesComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot({
      validation: true,
    }),
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forChild([{path:'admin',component:DashboardComponent,children:[
      {path:'',component:DashboardInnerComponent},
      {path:'dashboard',component:DashboardInnerComponent},
    {path:'products',component:ProductsComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'orders',component:OrdersComponent}]}])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
