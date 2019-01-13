import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [InputComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule
    ],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        InputComponent
    ]
})

export class SharedModule {
}