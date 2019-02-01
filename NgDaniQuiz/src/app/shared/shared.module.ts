import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginInputComponent } from "../login/input/login.input";
import { NotificationComponent } from './messages/notification/notification.component';
import { HeadComponent } from "../home/head/head.component";
import { RouterModule } from "@angular/router";


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
}