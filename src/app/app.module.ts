import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';

import { TokenInterceptor } from './interceptors/token.interceptor';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CustomerComponent } from './customer/customer.component';
import { SearchBoxComponent } from './youtube/search-box/search-box.component';
import { SearchResultComponent } from './youtube/search-result/search-result.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { HeaderComponemtComponent } from './header-componemt/header-componemt.component';
import { HomeComponemtComponent } from './home-componemt/home-componemt.component';
import { AboutComponemtComponent } from './about-componemt/about-componemt.component';
import { ServicesComponemtComponent } from './services-componemt/services-componemt.component';
import { DisplayImageComponent } from './display-image/display-image.component';

import { YoutubeComponentComponent } from './youtube-component/youtube-component.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SearchBoxComponent,
    SearchResultComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent,
    HeaderComponemtComponent,
    HomeComponemtComponent,
    AboutComponemtComponent,
    ServicesComponemtComponent,
    DisplayImageComponent,
    YoutubeComponentComponent,
    PaginationComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxPaginationModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
