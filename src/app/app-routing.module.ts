import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ProductsComponent } from './products/products.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'about', component: AboutComponent  },
    { path: 'services', component: ProductsComponent},
    {path: 'services/wholesale-fiber', component:ProductCategoryComponent},
    {path: 'services/cloud-solutions', component:ProductCategoryComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
