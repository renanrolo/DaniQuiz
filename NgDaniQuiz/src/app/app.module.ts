import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { LoggedInGuard } from './security/loggedin.guard';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NotificationService } from './shared/messages/notification.service';
import { MenuTopComponent } from './security/menu-top/menu-top.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarComponent,
    LoginComponent,
    MenuTopComponent,
    PublicLayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LoginService, LoggedInGuard, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
