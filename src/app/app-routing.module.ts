import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ProductsComponent } from './products/products.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { CountryHeaderComponent } from './components/country-header/country-header.component';
import { DRCComponent } from './components/drc/drc.component';
import { UgandaComponent } from './uganda/uganda.component';
import { GhanaComponent } from './ghana/ghana.component';
import { LiberiaComponent } from './liberia/liberia.component';
import { TogoComponent } from './togo/togo.component';
import { KenyaComponent } from './kenya/kenya.component';
import { SingleMemberComponent } from './single-member/team.component';
import { BlogComponent } from './blog/blog.component';
import { CoverageComponent } from './coverage/coverage.component';
import { CareersComponent } from './careers/careers.component';
import { CareerDescriptionComponent } from './career-description/career-description.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'team', component: AboutComponent},
    {path: 'team/:id', component: SingleMemberComponent},
    {path: 'services', component: ProductsComponent},
    {path: 'services/-', component: ProductsComponent},
    {path: 'services/wholesale-fiber', component:ProductCategoryComponent},
    {path: 'services/cloud-solutions', component:ProductCategoryComponent},
    {path:'services/wholesale-fiber/view/:id', component: SingleServiceComponent},
    {path:'services/cloud-solutions/view/:id', component: SingleServiceComponent},
    // {path:"country/:code", component:CountryHeaderComponent},
    {path:"country/drc", component:DRCComponent},
    {path:"country/uganda", component:UgandaComponent},
    {path:"country/ghana", component:GhanaComponent},
    {path:"country/liberia", component:LiberiaComponent},
    {path:"country/togo", component:TogoComponent},
    {path:"country/kenya", component:KenyaComponent},
    {path:"country/hybrid", component:HomeComponent},
    {path: 'coverage', component: CoverageComponent},
    {path: 'insights', component: BlogComponent},
    {path:'career', component:CareersComponent},
    {path:'careerdescription', component:CareerDescriptionComponent}
  ];

@NgModule({
  //Next page begins at top but previous page loads
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
