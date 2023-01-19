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
    HeroMainComponent
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
