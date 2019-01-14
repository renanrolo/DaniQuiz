import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { URL_API } from "../app.api";
import { Router } from "@angular/router";
import { LogedUser } from "./loged-user.model";
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

    user: LogedUser;
    navigateTo: string;

    private userStorageKey = "daniQuizUser";

    constructor(private http: HttpClient,
        private fb: FormBuilder,
        private route: Router) {
        this.checkUser();
    }

    cadastrarUsuario(formulario: any): Observable<LogedUser> {
        return this.http.post<LogedUser>(`${URL_API}/cadastrar`, formulario).do(user => {
            this.user = user;
            sessionStorage.setItem(this.userStorageKey, JSON.stringify(user));
        });
    }

    ngOnInit() {
        this.checkUser();
    }

    isLoged(): boolean {
        return this.user !== undefined;
    }

    login(email: string, password: string): Observable<LogedUser> {
        return this.http.post<LogedUser>(`${URL_API}/login`, { email: email, senha: password })
            .do(user => {
                if (user.authenticated) {
                    this.user = user;
                    sessionStorage.setItem(this.userStorageKey, JSON.stringify(user));
                }
            });
    }

    handdleLogin(returnPath?: string) {
        this.navigateTo = returnPath || '';
        this.route.navigate(['/login', returnPath]);
    }

    private checkUser() {
        if (!this.user) {
            let usuarioSalvo = JSON.parse(sessionStorage.getItem(this.userStorageKey));
            if (usuarioSalvo) {
                this.user = new LogedUser;
                this.user.Email = usuarioSalvo.Email;
                this.user.Expiration = usuarioSalvo.Expiration;
                this.user.Name = usuarioSalvo.Name;
                this.user.accessToken = usuarioSalvo.accessToken;
                this.user.authenticated = usuarioSalvo.authenticated;
            } 
        }
    }
}