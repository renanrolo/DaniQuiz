import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginInputComponent } from "../login/input/login.input";
import { NotificationComponent } from './messages/notification/notification.component';


@NgModule({
    declarations: [InputComponent, LoginInputComponent, NotificationComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule
    ],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        InputComponent, LoginInputComponent,
        NotificationComponent
    ]
})

export class SharedModule {
}