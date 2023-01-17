import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "templates", component: TemplatesComponent},
  {path: "product", component: ProductCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
