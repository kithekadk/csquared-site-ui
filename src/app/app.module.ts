import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroGeneralComponent } from './components/hero-general/hero-general.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HeroMainComponent } from "./components/hero-main/hero-main.component";
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DropdownComponent,
    FooterComponent,
    HeroGeneralComponent,
    LatestNewsComponent,
    TestimonialsComponent,
    HeroMainComponent,
    ProductsComponent,
    NavbarComponent,
    ProductCategoryComponent,
    SingleServiceComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
