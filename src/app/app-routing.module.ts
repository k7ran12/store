import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SimgleProductComponent } from './simgle-product/simgle-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home',component:HomeComponent},
  { path: 'categoria/:nombre', component:CategoriaComponent },
  {path:'sign_in',component:SignInComponent},
  {path:'sign_up',component:SignUpComponent},
  {path:'single_product',component:SimgleProductComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
