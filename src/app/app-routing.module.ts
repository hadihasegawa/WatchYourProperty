import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { DisplayContactComponent } from './display-services/display-contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { UpdateServicesComponent } from './update-services/update-services.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'homeService', component: HomeComponent },
  { path: 'createService', component: CreateContactComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user"]}} },
  { path: 'displayService', component: DisplayContactComponent },
  { path: 'updateService/:id', component: UpdateServicesComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user"]}} },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', component:AdminComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user", "servicemen"]}} },

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
