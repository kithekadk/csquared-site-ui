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
<<<<<<< HEAD
import { CountryHeaderComponent } from './components/country-header/country-header.component';
import { CountryCoverageComponent } from './components/country-coverage/country-coverage.component';
import { CountryAboutComponent } from './components/country-about/country-about.component';

import { CountryLatestnewsComponent } from './components/country-latestnews/country-latestnews.component';
import { WhatWeOfferFlexComponent } from './components/what-we-offer-flex/what-we-offer-flex.component';
import { WhatWeOfferGridComponent } from './components/what-we-offer-grid/what-we-offer-grid.component';
import { DRCComponent } from './components/drc/drc.component';
import { UgandaComponent } from './uganda/uganda.component';
import { GhanaComponent } from './ghana/ghana.component';
import { LiberiaComponent } from './liberia/liberia.component';
import { TogoComponent } from './togo/togo.component';
import { KenyaComponent } from './kenya/kenya.component';
=======
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
>>>>>>> 4d194269726595658fd93cdd83525ef97fb4ba6d

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
<<<<<<< HEAD
    CountryHeaderComponent,
    CountryCoverageComponent,
    CountryAboutComponent,
    CountryLatestnewsComponent,
    WhatWeOfferFlexComponent,
    WhatWeOfferGridComponent,
    DRCComponent,
    UgandaComponent,
    GhanaComponent,
    LiberiaComponent,
    TogoComponent,
    KenyaComponent
=======
    TeamComponent,
    BlogComponent
>>>>>>> 4d194269726595658fd93cdd83525ef97fb4ba6d
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
