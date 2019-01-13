import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './security/loggedin.guard';
import { LoginComponent } from './login/login.component';
import { LoginCadastrarComponent } from './login/login-cadastrar/login-cadastrar.component';

// Components

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login/:to', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: LoginCadastrarComponent },

    //Lazyload
    { path: 'professor/home', loadChildren: './professor/professor.module#ProfessorModule', canLoad: [LoggedInGuard]  }

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