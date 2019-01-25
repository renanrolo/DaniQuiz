import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeProfessorComponent } from "./home-professor/home-professor.component";
import { ListaQuizComponent } from './lista-quiz/lista-quiz.component';
import { MenuProfessorComponent } from './menu-professor/menu-professor.component';

const ROUTES: Routes = [
    { path: '', component: HomeProfessorComponent  }
];

@NgModule({
    declarations: [HomeProfessorComponent, ListaQuizComponent, MenuProfessorComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class ProfessorModule {
}