import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    HeaderComponent,
    HomeComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
