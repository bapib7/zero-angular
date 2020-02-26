import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ProductSliderComponent } from './banner/product-slider/product-slider.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ProductSliderComponent,
    PagenotfoundComponent
  
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    PagesModule,
    AdminModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
