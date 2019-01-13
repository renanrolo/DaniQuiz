import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { HeadComponent } from './home/head/head.component';
import { LoginCadastrarComponent } from './login/login-cadastrar/login-cadastrar.component';
import { LoggedInGuard } from './security/loggedin.guard';
import { LoginComponent } from './login/login.component';
import { LoginService } from './security/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginCadastrarComponent,
    HeadComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LoginService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
