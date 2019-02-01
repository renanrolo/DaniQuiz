import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './security/loggedin.guard';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

// Components

export const ROUTES: Routes = [

    {
        path: '', component: PublicLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'login/:to', component: LoginComponent },
            { path: 'login', component: LoginComponent },
            { path: 'cadastrar', component: CadastrarComponent }
        ]
    },

    // { path: '', component: HomeComponent },
    // { path: 'login/:to', component: LoginComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'cadastrar', component: CadastrarComponent },

    //Lazyload
    {
        path: 'professor',
        loadChildren: './professor/professor.module#ProfessorModule',
        canLoad: [LoggedInGuard],
        canActivate: [LoggedInGuard]
    }

    // {
    //     path: 'restaurants/:id', component: RestaurantDetailComponent,
    //     children: [
    //         { path: '', redirectTo: 'menu', pathMatch: 'full' },
    //         { path: 'menu', component: MenuComponent },
    //         { path: 'reviews', component: ReviewsComponent }
    //     ]
    // },
    //Exemplo de lazy load
    //{ path: 'about', loadChildren: './about/about.module#AboutModule' },

    //Wildcard "página 404": deixar por ultimo na lista de caminhos
    //{ path: '**', component: NotFoundComponent }
]