import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginInputComponent } from "../login/input/login.input";
import { NotificationComponent } from './messages/notification/notification.component';
import { HeadComponent } from "../home/head/head.component";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { AuthInterceptor } from "./auth.interceptor";
import { LoginService } from "../login/login.service";
import { NotificationService } from "./messages/notification.service";

@NgModule({
    declarations: [
        InputComponent,
        LoginInputComponent,
        NotificationComponent,
        HeadComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputComponent,
        LoginInputComponent,
        NotificationComponent,
        HeadComponent
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                LoginService, 
                NotificationService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
            ]
        }
    }
}