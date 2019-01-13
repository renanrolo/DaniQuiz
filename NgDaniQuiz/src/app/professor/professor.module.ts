import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeProfessorComponent } from "./home-professor/home-professor.component";

const ROUTES: Routes = [
    { path: '', component: HomeProfessorComponent  }
];

@NgModule({
    declarations: [HomeProfessorComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class ProfessorModule {
}