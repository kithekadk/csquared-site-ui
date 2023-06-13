import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgOptimizedImage } from '@angular/common';
import { NgTwitterTimelineModule } from 'ng-twitter-timeline';
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
import { CountryHeaderComponent } from './components/country-header/country-header.component';
import { CountryCoverageComponent } from './components/country-coverage/country-coverage.component';
import { CountryAboutComponent } from './components/country-about/country-about.component';
import { CountryLatestnewsComponent } from './components/country-latestnews/country-latestnews.component';
import { WhatWeOfferFlexComponent } from './components/what-we-offer-flex/what-we-offer-flex.component';
import { WhatWeOfferGridComponent } from './components/what-we-offer-grid/what-we-offer-grid.component';
import { DRCComponent } from './drc/drc.component';
import { UgandaComponent } from './uganda/uganda.component';
import { GhanaComponent } from './ghana/ghana.component';
import { LiberiaComponent } from './liberia/liberia.component';
import { TogoComponent } from './togo/togo.component';
import { KenyaComponent } from './kenya/kenya.component';
import { SingleMemberComponent } from './single-member/team.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CoverageComponent } from './coverage/coverage.component';
import { CareersComponent } from './careers/careers.component';
import { CareerDescriptionComponent } from './career-description/career-description.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GoogleMapsModule } from '@angular/google-maps';
import { PartnersComponent } from './partners/partners.component';
import { MapComponent } from './map/map.component';
import { ImpactComponent } from './impact/impact.component';
import { CountryMapComponent } from './country-map/country-map.component';
import { CountryProductsComponent } from './country-products/country-products.component';
import { FacebookModule } from 'ngx-facebook';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ShortenPipe } from './pipes/shorten.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewOneImpactComponent } from './view-one-impact/view-one-impact.component';
import { ViewOneNewsContentComponent } from './view-one-news-content/view-one-news-content.component';
import { CloudinaryModule } from '@cloudinary/ng';
import { SearchnewsPipe } from './pipes/searchnews.pipe';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';

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
    KenyaComponent,
    SingleMemberComponent,
    BlogComponent,
    ContactComponent,
    CoverageComponent,
    CareersComponent,
    CareerDescriptionComponent,
    HeroCarouselComponent,
    NotfoundComponent,
    PartnersComponent,
    MapComponent,
    ImpactComponent,
    CountryMapComponent,
    CountryProductsComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
    ShortenPipe,
    ViewOneImpactComponent,
    ViewOneNewsContentComponent,
    SearchnewsPipe,
    CloudServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    NgTwitterTimelineModule,
    NgbModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    GoogleMapsModule,
    FacebookModule.forRoot(),
    CarouselModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    NgxPaginationModule,
    CloudinaryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
