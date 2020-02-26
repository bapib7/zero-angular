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
import { HttpClientModule } from '@angular/common/http';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [DashboardComponent, DashboardInnerComponent, ProductsComponent, OrdersComponent, CategoriesComponent, CategoriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
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
