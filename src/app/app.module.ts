import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemCartComponent } from './components/product-item-cart/product-item-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    CartComponent,
    ProductItemCartComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
