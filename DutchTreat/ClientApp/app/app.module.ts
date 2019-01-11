import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './shop/productList.component';
import { DataService } from './shared/dataService';

@NgModule({
  declarations: [
      AppComponent,
      ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
