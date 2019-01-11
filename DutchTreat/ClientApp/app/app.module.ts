import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './shop/productList.component';
import { CartComponent } from './shop/cart.component';

import { DataService } from './shared/dataService';

@NgModule({
  declarations: [
      AppComponent,
      ProductListComponent,
      CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
