import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { DisplayContactComponent } from './display-services/display-contact.component';

import { ServicesService } from './services.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UpdateServicesComponent } from './update-services/update-services.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CreateContactComponent,
    DisplayContactComponent,
    HomeComponent,
    UpdateServicesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
