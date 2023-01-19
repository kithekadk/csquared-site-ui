import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'about', component: AboutComponent  },
    { path: 'services', component: ProductsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
