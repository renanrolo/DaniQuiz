import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeProfessorComponent } from "./home-professor/home-professor.component";
import { ListaQuizComponent } from './lista-quiz/lista-quiz.component';
import { SharedModule } from "../shared/shared.module";
import { LayoutProfessorComponent } from './layout-professor/layout-professor.component';
import { MenuLateralProfessorComponent } from './menu-lateral-professor/menu-lateral-professor.component';
import { MenuLateralService } from "./menu-lateral-professor/menu-lateral-service";
import { EnqueteComponent } from './enquete/enquete.component';
import { CadastrarEnqueteComponent } from './enquete/cadastrar-enquete/cadastrar-enquete.component';
import { EnqueteService } from "./enquete/enquete-service";
import { MenuTopProfessorComponent } from './menu-top-professor/menu-top-professor.component';

const ROUTES: Routes = [
    {
        path: '', component: LayoutProfessorComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeProfessorComponent },
            { path: 'enquete', component: EnqueteComponent },
            { path: 'enquete/cadastrar', component: CadastrarEnqueteComponent }

        ]
    }
];

@NgModule({
    declarations: [
        HomeProfessorComponent,
        MenuLateralProfessorComponent,
        ListaQuizComponent,
        LayoutProfessorComponent,
        MenuLateralProfessorComponent,
        EnqueteComponent,
        CadastrarEnqueteComponent,
        MenuTopProfessorComponent
    ],
    imports: [
        SharedModule.forRoot(),
        RouterModule.forChild(ROUTES)
    ],
    providers: [MenuLateralService, EnqueteService],
})

export class ProfessorModule {
}