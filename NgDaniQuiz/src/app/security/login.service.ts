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


    constructor(private http: HttpClient,
        private fb: FormBuilder,
        private route: Router) {
    }

    cadastrarUsuario(formulario: any): Observable<LogedUser> {
        return this.http.post<LogedUser>(`${URL_API}/cadastrar`, formulario)
            .do(user => this.user = user);
    }

    ngOnInit() {
        console.log("LoginService.ngOnInit: user é = ", this.user);
    }

    isLoged(): boolean {
        return this.user !== undefined;
    }

    login(email: string, password: string): Observable<LogedUser> {
        return this.http.post<LogedUser>(`${URL_API}/login`, { email: email, password: password });
    }

    handdleLogin(returnPath?: string) {
        this.navigateTo = returnPath || '';
        this.route.navigate(['/login', returnPath]);
    }
}