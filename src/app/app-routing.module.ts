import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ProductsComponent } from './products/products.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'team', component: AboutComponent},
    {path: 'team/:id', component: TeamComponent},
    {path: 'services', component: ProductsComponent},
    {path: 'services/wholesale-fiber', component:ProductCategoryComponent},
    {path: 'services/cloud-solutions', component:ProductCategoryComponent},
    {path:'services/wholesale-fiber/view/:id', component: SingleServiceComponent},
    {path:'services/cloud-solutions/view/:id', component: SingleServiceComponent},
    {path: 'blog', component: BlogComponent}
  ];

@NgModule({
  //Next page begins at top but previous page loads at last users location
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
