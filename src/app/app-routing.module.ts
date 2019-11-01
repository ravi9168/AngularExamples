import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { HomeComponemtComponent } from './home-componemt/home-componemt.component';
import { AboutComponemtComponent } from './about-componemt/about-componemt.component';
import { ServicesComponemtComponent } from './services-componemt/services-componemt.component';
import { CustomerComponent } from './customer/customer.component';
import { DisplayImageComponent } from './display-image/display-image.component';
import { YoutubeComponentComponent } from './youtube-component/youtube-component.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 // { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'home', component: HomeComponemtComponent },
  { path: 'about', component: AboutComponemtComponent },
  { path: 'services', component: ServicesComponemtComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customer/list', component: CustomersListComponent },
  { path: 'customer/add', component: CreateCustomerComponent },
  { path: 'customer/findbyage', component: SearchCustomersComponent },
  { path: 'image', component: DisplayImageComponent },
  { path: 'youtube', component: YoutubeComponentComponent },
  { path: 'pagination', component: PaginationComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductsComponent,
    data: { title: 'List of Products' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact List' }
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
